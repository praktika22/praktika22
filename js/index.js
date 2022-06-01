
coords = [[], []]

urls = []

function createMarkers() {
    var marker = document.createElement('a')
    urls.forEach(element => {
        marker.href = element
    });

}