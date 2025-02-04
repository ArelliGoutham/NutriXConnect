import { combineReducers } from "redux";
import AuthReducer from "./slices/AuthSlice";
import DietitianReducer from "./slices/DietitainSlice";
import PaginationReducer from "./slices/PaginationSlice";
import UserReducer from "./slices/UserSlice";
import PaymentReducer from "./slices/PaymentSlice";
import SubscriptionReducer from "./slices/SubscriptionSlice";

const rootReducer = combineReducers({
  auth: AuthReducer,
  dietitians: DietitianReducer,
  pagination: PaginationReducer,
  user: UserReducer,
  payment: PaymentReducer,
  subscription: SubscriptionReducer,
});

export default rootReducer;
