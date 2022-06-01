
coords = [[30, 60], []]

urls = ['#']

function createMarkers() {
    var marker = document.createElement('a')
    urls.forEach(element => {
        marker.href = element
    })

    marker.style.position = 'absolute'
    coords.forEach(i => {
        i.forEach(q => {
            marker.style.top = q[0]
            marker.style.left = q[1]
        });
    })
}