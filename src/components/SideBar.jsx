const SideBar = () => {
    return(
        <div className=" w-1/6 shadow-lg m-1 p-3">
           <h1 className="font-bold pt-2">Subscriptions</h1>
           <ul>
            <li>Tips Official</li>
            <li>NDTV India</li>
            <li>Haunting Tube</li>
            <li>ABP Live</li>
            <li>T-Series</li>
           </ul>
            <h1 className="font-bold pt-5">Explore</h1>
           <ul>
            <li>Shopping</li>
            <li>Music</li>
            <li>Movies</li>
            <li>Fashion</li>
            <li>Podcasts</li>
           </ul>
            <h1 className="font-bold pt-5">More from Youtube</h1>
           <ul>
            <li>Youtube Kids</li>
            <li>Youtube Music</li>
            <li>Youtube Movies</li>
           </ul>
        </div>
    );
}

export default SideBar;