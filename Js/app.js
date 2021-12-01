var mapme = L.map('mapus').setView([-0.39379, 36.96152], 13);

	 L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mapme);

    coords = [[ -0.39785, 36.95749], [-0.39421, 36.95457], [ -0.39216, 36.96548], [-0.39327, 36.95939], [-0.3945, 36.96321], [-0.39221, 36.96117]];
    rent = ['Ksh 4500', 'Ksh 4000', 'Ksh 4300', 'Ksh 2000', 'Ksh 4000', 'Free']
    //areas


    //Zooming Apartments

    var apart1 = document.querySelector("#apart1");
    var apart2 = document.querySelector("#apart2");
    var apart3 = document.querySelector("#apart3");
    var apart4 = document.querySelector("#apart4");
    var apart5 = document.querySelector("#apart5");
    var apart6 = document.querySelector("#apart6");

    aparts = [apart1,apart2,apart3,apart4,apart5,apart6];

    

    let l = coords.length;

    for (let i = 0; i < l;i++) {
         //popups
         var pop = L.popup({
            closeOnclick: true
        }).setContent('some text');

        // markers
        var marker = L.marker(coords[i]).addTo(mapme).bindPopup(pop);
        // labels
        var toollip = L.tooltip({
            permanent: true
        }).setContent(rent[i]);

        marker.bindTooltip(toollip);

       //Zooming In apartments

       aparts[i].addEventListener("mouseover", ()=>
       {
            mapme.flyTo(coords[i],17)
       })

    }

    //greens -0.39785, 36.95749
    //catho -0.39421, 36.95457
    //kens -0.39216, 36.96548
    //batian -0.39327, 36.95939
    //sunrise -0.3945, 36.96321
    //staff -0.39221, 36.96117