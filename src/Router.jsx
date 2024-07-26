import { Route, Routes } from "react-router-dom";

import CardRegister from "./pages/payment/CardRegister";
import KakaoPayApprove from "./pages/payment/kakaoPay/KakaoPayApprove";
import KakaoPayCancel from "./pages/payment/kakaoPay/KakaoPayCancel";
import KakaoPayFail from "./pages/payment/kakaoPay/KakaoPayFail";
import KakaoPayRegister from "./pages/payment/kakaoPay/KakaoPayRegister";
import Main from "./pages/main/Main";
import Manager from "./pages/admin/payment/PaymentManager";
import MyPage from "./pages/myPage/MyPage";
import Payment from "./pages/payment/Payment";
import PaymentMypage from "./pages/payment/PaymentMypage";
import RefundManager from "./pages/admin/payment/RefundManager";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/payment/kakaopay/register" element={<KakaoPayRegister />} />
      <Route path="/payment/card/register" element={<CardRegister />} />
      <Route path="/payment/kakaopay/approve" element={<KakaoPayApprove />} />
      <Route path="/payment/kakaopay/fail" element={<KakaoPayFail />} />
      <Route path="/payment/kakaopay/cancel" element={<KakaoPayCancel />} />
      <Route path="/admin/payments" element={<Manager />} />
      <Route path="/admin/refunds" element={<RefundManager />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/mypage/payment" element={<PaymentMypage />} />
    </Routes>
  );
};

export default Router;
