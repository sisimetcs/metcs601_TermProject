
   
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
    





fetch('https://sisimetcs.github.io/metcs601_TermProject/CS601_project_Tian/sisi_education.json')
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



