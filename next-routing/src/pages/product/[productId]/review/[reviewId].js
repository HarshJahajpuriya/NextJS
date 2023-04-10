import { useRouter } from "next/router";

const ReviewComponent = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;

  return <h1>Review {reviewId} of Product {productId}</h1>
}

export default ReviewComponent;