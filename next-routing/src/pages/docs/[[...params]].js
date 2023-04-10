import { useRouter } from 'next/router'

const DocsComponent = () => {
  const router = useRouter();
  const { params = [] } = router.query; 
  console.log(params)

  if(params.length === 2) {
    return <h1>Showing concept {params[1]}, of feature {params[0]} from Documents</h1>
  }
  if(params.length === 1) {
    return <h1>Showing feature {params[0]} from Documents</h1>
  }

  return <h1>Documents Home Page</h1>
}

export default DocsComponent;