import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { loadStripe } from "@stripe/stripe-js";
import db from "../firebase";

const PaymentPlan = () => {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    db.collection("customers")
      .doc(user.uid)
      .collection("subscriptions")
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach(async (subscription) => {
          setSubscription({
            role: subscription.data().role,
            current_period_end: subscription.data().current_period_end.seconds,
            current_period_start:
              subscription.data().current_period_start.seconds,
          });
        });
      });
  }, [user.uid]);

  // recuperer les different plans d'abonnement
  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapShot) => {
        const products = {};
        querySnapShot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  // lancer le paiement
  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();
      if (error) {
        alert(`Une erreur est survenue: ${error.message}`);
      }
      if (sessionId) {
        const stripe = await loadStripe(
          "pk_test_51LCof9IwUdh8ID2xd0srTvJp5F9iImU0dmGRPPXjDbI4xl26ypGcE4vY39eTMjSDyVehaKRZE9Eze1d3S59pNyC900I1VgdI8Z"
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  return (
    <div>
      {subscription && (
        <p className="pt-2">
          Renouvellement :{" "}
          {new Date(
            subscription?.current_period_end * 1000
          ).toLocaleDateString()}
        </p>
      )}
      {Object.entries(products).map(([productId, productData]) => {
        const isCurrentPackage = productData.name
          ?.toLowerCase()
          .includes(subscription?.role);

        return (
          <div
            key={products.Id}
            className="flex justify-between p-4 opacity-80 hover:opacity-100"
          >
            <div>
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button
              className=" px-[20px] py-[10px] bg-[#e50914] font-semibold "
              onClick={() =>
                !isCurrentPackage && loadCheckout(productData.prices.priceId)
              }
            >
              {isCurrentPackage ? "abonné" : "s'abonner"}
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default PaymentPlan;
