import React from 'react'

const Lebedev_mock = () => {
  return (
	<div className="lebedev-wrapper ">
		<div className="lebedev-video">
			<video width="100%" height="100%" controls='' autoplay="" muted loop>
			<source src="mokapus.mp4" type="video/mp4" />
			{/* Add additional source tags for other formats (WebM, Ogg) if needed */}
			
		</video>
		</div>
		<div className="mokapus_title">
			Повторение за мастерами - способ учебы (наверно нормальный )
		</div>
		<a href="" className="mokapus_btn">попробовать бесплатно</a>
	</div>
  )
}

export default Lebedev_mock