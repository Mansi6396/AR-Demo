function onViewButtonClick(){
 // Get the container element where AR content will be rendered
 const container = document.querySelector('.card');

 // Create AR.js scene
 const scene = document.createElement('a-scene');
 container.appendChild(scene);

 // Create AR.js camera
 const camera = document.createElement('a-entity');
 camera.setAttribute('camera', '');
 scene.appendChild(camera);

 // Create AR.js marker with your 3D model (door handle)
 const marker = document.createElement('a-marker');
 marker.setAttribute('type', 'pattern');
 marker.setAttribute('url', 'IMG/pattern-doorHandle.patt'); // Replace with the path to your marker pattern
 scene.appendChild(marker);

 // Create 3D model (door handle)
 const doorHandle = document.createElement('a-entity');
 doorHandle.setAttribute('gltf-model', 'IMG/doorHandle.gltf'); // Replace with the path to your 3D model
 doorHandle.setAttribute('scale', '0.05 0.05 0.05'); // Adjust scale as needed
 marker.appendChild(doorHandle);
}