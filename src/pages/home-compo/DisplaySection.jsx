const DisplaySection = () => {
  return (
    <div className="grid grid-cols-2 px-14 items-center">

      <div className="h-[490px]">
        <dotlottie-player src="https://lottie.host/e2a827d9-927e-44b5-b1b1-988fbe0d61a5/vp2fFulF7l.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
      </div>


      <div className="space-y-4">
        <h1 className="text-5xl font-semibold">Hi, I am John</h1>
        <p className="text-xl italic text-pink-600">Some Dev, Freelancer, Rounder</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolorem blanditiis odio dicta nesciunt consequuntur laudantium dolor possimus debitis? Quidem ea sint id fugiat consectetur! Dignissimos repudiandae dicta numquam molestiae!</p>

      </div>


    </div>
  )
}
export default DisplaySection