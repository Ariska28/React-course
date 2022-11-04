import { Cart } from "../components/Cart/Cart";

export const withAuthorization = (
  AuthorizedComponent,
  UnAuthorizedComponent
) => {
  return function (props) {
    const isAuthorized = useSelector(selectIsUserAuthorized);

    return isAuthorized ? (
      <AuthorizedComponent {...props} />
    ) : (
      <UnAuthorizedComponent {...props} />
    );
  };
};

const CartWithAuthorized = withAuthorization(Cart, () => (
  <span>Access denied</span>
));
const ReviewWithAuthorized = withAuthorization(Review, () => (
  <span>Access denied</span>
));
const DishWithAuthorized = withAuthorization(Dish, () => (
  <span>Access denied</span>
));
