import React from 'react'
import Layout from '../../Components/Layout'
/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
    <Layout>
      <div style={{margin:'5rem' ,background:'while'}}className="Jumbotron text-center">
        <h1>Welcome to Admin DashBoard</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      </div>
    </Layout>
   )

 }

 export default Home