import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
	const [loading, setloading] = useState(true);
	const [jobs, setJobs] = useState([]);
	const [value, setValue] = useState(0);

	const fetchData = async () => {
		const response = await fetch(url);
		const data = await response.json();

		setJobs(data);
		setloading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	if (loading) {
		return (
			<section className="section loading">
				<h1>Laoding...</h1>
			</section>
		);
	}

	const { company, dates, duties, title } = jobs[value];

	return (
		<section className="section">
			<div className="title">
				<h2>experience</h2>
				<div className="underline"></div>
			</div>

			<div className="jobs-center">
				<div className="btn-container">
					{/* Jobs */}

					{jobs.map((item, index) => {
						return (
							<button
								key={index}
								className={`job-btn ${index === value && "active-btn"}`}
								onClick={() => setValue(index)}
							>
								{item.company}
							</button>
						);
					})}
				</div>

				<article className="job-info">
					<h3>{title}</h3>
					<h4>{company}</h4>
					<p className="job-dates">{dates}</p>
					{duties.map((item, index) => {
						return (
							<div key={index} className="job-desc">
								<FaAngleDoubleRight className="job-icon" />
								{item}
							</div>
						);
					})}
				</article>
			</div>
			<button type="button" className="btn">
				more info
			</button>
		</section>
	);
}

export default App;

{
	/* <section className='section'>
<div className='title'>
  <h2>expierence</h2>
  <div className='underline'></div>
</div>
<div className='jobs-center'>
  {/* btn container */
}
//   <div className='btn-container'>
//     {jobs.map((item, index) => {
//       return (
//         <button
//           key={item.id}
//           onClick={() => setValue(index)}
//           className={`job-btn ${index === value && 'active-btn'}`}
//         >
//           {item.company}
//         </button>
//       )
//     })}
//   </div>
//   {/* job info */}
//   <article className='job-info'>
//     <h3>{title}</h3>
//     <h4>{company}</h4>
//     <p className='job-date'>{dates}</p>
//     {duties.map((duty, index) => {
//       return (
//         <div key={index} className='job-desc'>
//           <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
//           <p>{duty}</p>
//         </div>
//       )
//     })}
//   </article>
// </div>
// <button type='button' className='btn'>
//   more info
// </button>
// </section> */}
