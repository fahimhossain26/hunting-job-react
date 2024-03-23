

const Banner = () => {
    return (
        <div>
            {/* <h2>Home page Banner </h2> */}

            <div className="hero  bg-base-100 shadow-2xl bg-blue-50 mt-10 mb-10 rounded-xl">
  <div className="hero-content flex-col lg:flex-row-reverse p-10 items-end">
    <img src="/src/images/user.png" className="max-w-sm rounded-lg shadow-4xl " />
    <div>
      <h1 className="text-6xl font-bold">One Step <br /> Closer To Your <br /> Dream Job</h1>
      <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;
