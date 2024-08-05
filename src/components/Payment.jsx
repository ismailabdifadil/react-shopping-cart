import { useState } from 'react';

const Payment = () => {
  const initialPayment = {
    zaad: false,
    sahal: false,
    evc: false,
  };
  const [paymentMethod, setPaymentMethod] = useState(initialPayment);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div>
        <h2>Pay With</h2>
        <div
          className={`payment-card ${paymentMethod.zaad && 'selected'}`}
          onClick={() => setPaymentMethod({ ...initialPayment, zaad: true })}
        >
          <h3>Zaad Service</h3>
        </div>
        <div
          className={`payment-card ${paymentMethod.evc && 'selected'}`}
          onClick={() => setPaymentMethod({ ...initialPayment, evc: true })}
        >
          <h3>EVC Plus</h3>
        </div>
        <div
          className={`payment-card ${paymentMethod.sahal && 'selected'}`}
          onClick={() => setPaymentMethod({ ...initialPayment, sahal: true })}
        >
          <h3>Sahal Services</h3>
        </div>
        <form>
          <input className="form-control" type="text" placeholder="2526....." />
          <button className="btn-processed" onClick={handleSubmit}>
            Processed
          </button>
        </form>
      </div>
    </>
  );
};
export default Payment;
