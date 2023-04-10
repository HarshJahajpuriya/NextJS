import { useRouter } from 'next/router';

const ReviewComponent = () => {

  const router = useRouter();
  const productId = router.query.productId;

  return (
    <>
      <h1>Product {productId} reviews</h1>
      <h2>Review 1</h2>
      <h2>Review 2</h2>
      <h2>Review 3</h2>
    </>
  )
}

export default ReviewComponent