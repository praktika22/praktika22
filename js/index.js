
coords = [[40, 65], [45, 50]]

urls = ['#']

function createMarkers() {
    var marker = document.createElement('a')
    var body = document.getElementById('container')

    urls.forEach(element => {
        marker.href = element
    })
    
    marker.title = 'Simple Marker!'
    marker.classList.add('marker')
    marker.style.backgroundImage = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2017%2F05%2FMap-Marker-PNG-HD.png&f=1&nofb=1'
    marker.style.position = 'absolute'
    coords.forEach(element => {
        for (let i = 0; i < element.length; i++) {
            const o = element[i]
            console.log(o)
            marker.style.top = o
            marker.style.left = o
        }
    })
    
    body.appendChild(marker)
}

createMarkers()