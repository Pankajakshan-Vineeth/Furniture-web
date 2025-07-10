import CartTotal from "../Components/CartTotal/CartFooter"
import ShopBanner from "../Components/ShopBanner/ShopBanner"

const Cart = () => {
  return (
    <div>
      <ShopBanner heading="Cart"  />
      <CartTotal/>
    </div>
  )
}

export default Cart
