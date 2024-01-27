import React from 'react'

const Navbar = () => {
  return (
	<nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li class="nav-item">
          <a class="nav-link" href="#">Projects</a>
        </li>
		<li class="nav-item">
          <a class="nav-link" href="#">portfolio</a>
        </li>
		<li class="nav-item">
          <a class="nav-link" href="#">learn</a>
        </li>
		<li class="nav-item" id='leftest'>
          <a class="nav-link" href="#">programming</a>
        </li>

        <div className="nav-item">
		<a class="navbar-brand" href="#">Codium </a>
		</div>

		<li class="nav-item" id='rightest'>
          <a class="nav-link" href="#">react</a>
        </li>

		<li class="nav-item">
          <a class="nav-link" href="#">django</a>
        </li>

		<li class="nav-item">
          <a class="nav-link" href="#">drf</a>
        </li>

		<li class="nav-item">
          <a class="nav-link" href="#">github</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar