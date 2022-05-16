const Navbar = () => {
    return ( 
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed">
            <div className="container">
             <a class="navbar-brand" href="home"> <img className="rounded-circle" width="80px" src="https://media-exp1.licdn.com/dms/image/C4D03AQHQkzdx7puGuw/profile-displayphoto-shrink_200_200/0/1548513883827?e=1654732800&v=beta&t=xoKuJVLyvd9S3JlyNV0std9M89tVUo7S5mVla1T7Uc0" /> Mounir Hadji</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a class="nav-item nav-link active" href="Services">Services</a>
                <a class="nav-item nav-link" href="projects">Projects</a>
                <a class="nav-item nav-link" href="contact">Contact me</a>
                
                </div>
            </div>
            </div>
</nav>
     );
}
 
export default Navbar;