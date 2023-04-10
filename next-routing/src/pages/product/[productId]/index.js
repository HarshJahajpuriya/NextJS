import { useRouter } from "next/router"

const ProductComponent = () => {

  const router = useRouter();
  const productId = router.query.productId;

  return <h1>Details about product {productId}</h1>
}

export default ProductComponent