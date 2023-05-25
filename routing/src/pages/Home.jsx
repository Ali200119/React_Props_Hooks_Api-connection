import React from 'react'
import Product from '../components/common/Product'

function Home() {
  const products = ["iPhone, Nokia, Samsung, Sony"];


  
  return (
    <main>
      <section id="product">
        <div className="container">
          <div className="products">
            {
              products.map(function (item, i) {
                return (
                  <>
                    <Product productName={item} />
                  </>
                )
              })
            }
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home