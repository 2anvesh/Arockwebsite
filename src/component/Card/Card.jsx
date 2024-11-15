import React, { useState } from 'react'

const Card = () => {
  const [val, setVal] = useState([
    {
      Image: 'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoaW5nJTIwbWVufGVufDB8fDB8fHww',
      name: "Blazer",
      description: "Tailored jacket with a structured fit, less formal than a suit jacket but still refined; suitable for business casual or smart  durable fabric; versatile for work, formal, or casual looks. casual outfits.",
      inStock: true,
    },
    {
      Image: 'https://images.unsplash.com/photo-1603252109360-909baaf261c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoaW5nJTIwbWVufGVufDB8fDB8fHww',
      name: "Oxford Shirt",
      description: "Classic button-down shirt with a thicker, durable fabric; versatile for work, formal, or casual looks. durable fabric; versatile for work, formal,  durable fabric; versatile for work, or casual looks.",
      inStock: false,
    },
    {
      Image: 'https://media.istockphoto.com/id/1195166190/photo/male-model-in-a-blue-suit-casual-outfit.webp?a=1&b=1&s=612x612&w=0&k=20&c=-omEh0o_BkskNrezEawXFfxzr8eb4T9MEsOdaJCwcWk=',
      name: "Suit ",
      description: "Matched blazer and trousers in the same fabric, worn with a dress shirt and tie; essential for formal  durable fabric; versatile for work, formal, or casual looks. or business   durable fabric; versatile attire..",
      inStock: true,
    },
    {
      Image: 'https://media.istockphoto.com/id/616878608/photo/fashion-woman-model-in-leopard-dress-walking-in-evening-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=3mbhYkRFKj9PZahJnZXOhF5UhyQpS9PjKT0ZCZ48lgI=',
      name: "Tunic Dress ",
      description: " Falls to mid-thigh, slightly loose-fitting with a relaxed vibe; works well for layering or a casual day out  durable fabric; versatile for work, formal, or casual looks. durable fabric; versatile for work, forma",
      inStock: false,
    },
    {
      Image: 'https://media.istockphoto.com/id/93906762/photo/young-woman-in-dress-made-of-coloured-ribbons.webp?a=1&b=1&s=612x612&w=0&k=20&c=XznkHiAMnX0hxleapXzHF1F9wBk_Co7tKTPiG_NT1-Q=',
      name: "A-line Dress",
      description: "Fitted at the top and gradually flares out from the waist, creating a triangular, -shaped silhouette; flattering for most body types and works well for casual or semi-formal settings.",
      inStock: true,
    },
    {
      Image: 'https://plus.unsplash.com/premium_photo-1697695568160-ab895da7610b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoJTIwbW9kZWwlMjBtZW58ZW58MHx8MHx8fDA%3D',
      name: "Bodycon Dress",
      description: " A form-fitting dress that hugs every curve, made from stretchy materials like spandex, ideal for parties and night outs.",
      inStock: true,
    },
    {
      Image: 'https://plus.unsplash.com/premium_photo-1705554519595-c1143c7fef97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNsb3RoJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D',
      name: "Midi Dress",
      description: "Falls mid-calf between knee and ankle; versatile for day or evening wear, often with a classy, vintage vibe.",
      inStock: true,
    },
    {
      Image: 'https://plus.unsplash.com/premium_photo-1682095757120-c9abb908ed60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsfGVufDB8fDB8fHww',
      name: "Mermaid Dress",
      description: "Fitted from the top to the knees, then flares out dramatically like a mermaid's tail; typically worn for formal events.",
      inStock: true,
    },
    {
      Image: 'https://plus.unsplash.com/premium_photo-1673758905770-a62f4309c43c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D',
      name: "High-Low Dress",
      description: "Short in the front and long in the back; combines a playful and elegant look, often worn for parties or outdoor events.",
      inStock: true,
    },
    {
      Image: 'https://plus.unsplash.com/premium_photo-1682095672918-234595db1df8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww',
      name: "Shirt Dress",
      description: "Button-down dress with a collar, styled like an oversized shirt; a mix of casual and semi-formal, perfect for work or day outings.",
      inStock: true,
    },
    {
      Image: 'https://images.unsplash.com/photo-1516575150278-77136aed6920?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D',
      name: "Tunic Dress",
      description: "Falls to mid-thigh, slightly loose-fitting with a relaxed vibe; works well for layering or a casual day out.",
      inStock: true,
    },
    {
      Image: 'https://plus.unsplash.com/premium_photo-1682096515837-81ef4d728980?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D',
      name: "Off-Shoulder Dress",
      description: " Exposes shoulders with a neckline below the collarbone; flirty and feminine, great for summer events or evening dates.",
      inStock: true,
    },
    {
      Image: 'https://images.unsplash.com/photo-1490551632573-78c6c247f5d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFzaGlvbiUyMG1vZGVsJTIwbWVufGVufDB8fDB8fHww',
      name: "Bomber Jacket ",
      description: "Short, zippered jacket with elastic cuffs and hem; gives a sporty, edgy look and pairs well with jeans.",
      inStock: true,
    },
    {
      Image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMG1vZGVsJTIwbWVufGVufDB8fDB8fHww',
      name: "Blazer",
      description: " Tailored jacket with a structured fit, less formal than a suit jacket but still refined; suitable for business casual or smart casual outfits.",
      inStock: true,
    },
    {
      Image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhc2hpb24lMjBtb2RlbCUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D',
      name: "Henley Shirt",
      description: "Collarless shirt with a few buttons at the neckline; gives a rugged, casual look and can be worn alone or layered.",
      inStock: true,
    },
    
  ])

  const toggleStock = (index) => {
    setVal((prevVal) =>
      prevVal.map((item, i) =>
        i === index ? { ...item, inStock: !item.inStock } : item
      )
    )
  }

  return (
    <div className=' w-full h-full bg-[white] flex  flex-wrap p-16'>
      {val.map((elem, index) => (
        <div key={index} className='w-52 bg-zinc-100 rounded-md overflow-hidden m-2'>
          <div className='w-full h-32 bg-zinc-300'>
            <img className='object-cover w-full h-full ' src={elem.Image} alt={elem.name} />
          </div>
          <div className='w-full px-3 py-4'>
            <h2 className='font-semibold hover:text-red-400 cursor-pointer'>{elem.name}</h2>
            <p className='text-xs mt-3'>{elem.description}</p>
            <button
              onClick={() => toggleStock(index)}
              className={`w-20 mt-2 text-xs font-semibold text-white ${elem.inStock ? 'bg-blue-500 hover:bg-blue-700' : 'bg-red-500 hover:bg-red-700'} rounded-md p-1`}
            >
              {elem.inStock ? "In Stock" : "Sold Out"}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
