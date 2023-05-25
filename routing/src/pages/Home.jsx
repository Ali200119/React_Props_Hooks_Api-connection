import React from 'react'
import Product from '../components/common/Product'
import {Button} from "reactstrap"
import { useState } from 'react';

function Home() {
  const products = ["iPhone, Nokia, Samsung, Sony"];


  // let num = 3;

  // function add() {
  //   num++;
  // }

  const[num, setNum] = useState(3);

  const add = () => {
    setNum(num + 1)
  }

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

          <h1>{num}</h1>

          <Button onClick={add}>Create</Button>
        </div>
      </section>
    </main>
  )
}

export default Home