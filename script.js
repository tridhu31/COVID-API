fetch("data.json")
.then (res=> res.json())
.then(abc =>
    abc.data.forEach(element => {
        var lat = element.latitude;
        var lon = element.longitude;
        var cases = element.infected;
        var colour
        if (cases > 300){
            colour = "red"
        }else{
            colour = "green"
        }
        
        new mapboxgl.Marker({
            color:colour,
            draggable: false
        }).setLngLat([lon, lat])
        .addTo(map)
    })
)
    