
   
    const div = document.getElementById('projects');

    function createProjectList(projects) {
        let str = `<dl>`;
        //New Features in ES6:for
        for (let project of projects) {
            str += ` 
          <dt>${project.degree.school}</dt>
          <dt>${project.degree.major}</dt>
          <dt>${project.degree.type}</dt>
          <dt>${project.degree.yearConferred}</dt>
          <br/> 
        `;
        }

        str += '</dl>';

        div.innerHTML = str;
    }
    





fetch('http://127.0.0.1:5501/sisi_education.json')
    .then(res => {
        if (res.ok) {
            console.log('Success')
            return res.json()
        } else {

            alert("Error: " + res.status)
            return { "MyEducation": [] }
        }


    })
    .then(data => {
        createProjectList(data.MyEducation)

        console.log(data)

    })
    .catch(error => alert(error))



