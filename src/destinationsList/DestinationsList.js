import React from 'react';
import Searchresults from '../searchresults/Searchresults';

function DestinationsList() {
    const destinationsList = [
        { "id": 1, "name": "Hyderabad", "imgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/98/f7/df/charminar.jpg?w=2400&h=1000&s=1" },
        { "id": 2, "name": "Delhi", "imgUrl": "https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg" },
        { "id": 3, "name": "Mumbai", "imgUrl": "https://static.toiimg.com/photo/msid-103532002,width-96,height-65.cms" },
        { "id": 4, "name": "Banglore", "imgUrl": "https://lp-cms-production.imgix.net/2019-06/9483508eeee2b78a7356a15ed9c337a1-bengaluru-bangalore.jpg" },
        { "id": 5, "name": "Pune", "imgUrl": "https://media.licdn.com/dms/image/D4D12AQF9TIOxMgK6aA/article-cover_image-shrink_720_1280/0/1697400949285?e=2147483647&v=beta&t=4JMaimpQpZjYkPth-Dr3cGO4ItN0Oho5M0aa5Jy8nOQ" },
        { "id": 6, "name": "Himatyth", "imgUrl": "https://www.trawell.in/admin/images/upload/249844272Himayat_Sagar_Main.jpg" },
        { "id": 7, "name": "Banglades", "imgUrl": "https://content.r9cdn.net/rimg/dimg/c9/06/8d4fe0d8-city-28030-164fcc85915.jpg?width=1200&height=630&xhint=1477&yhint=1081&crop=true" },
        { "id": 8, "name": "Denmark", "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv9ZcF3lYpmild1azTAYiyKLw1mMKY_vMHrg&s" },
        { "id": 9, "name": "Madyaprdes", "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZtewTv1nN6H83d34QdgmE5DZ4khfRQ8Irwg&s" },
        { "id": 10, "name": "Warangal", "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-SxRdFbsmC4uUorXKrBcA94c3SVC1CRwIXw&s" }

    ];

    return (
        <div>
            <Searchresults destinationsList={destinationsList} />
        </div>
    );
}

export default DestinationsList;
