function fetchContests(){
     drop_down_menu=document.getElementById('contest_dropdown');
     drop_down=document.createElement('drop_down');
    const newOption =document.createElement('options');
    const optionText=document.createTextNode('select contests');
    newOption.appendChild(optionText);
    const url='https://kontests.net/api/v1/leet_code';

    fetch(url)
        .then(
            function(response){
                if(response.status!==200){
                    console.warn('Problem in status code:'+response.status);
                    return;
                    response.json().then(function(data){
                        for(let i=0;i<data.length;i++){
                            const optionText=document.createTextNode(data[i].name);
                            newOption.appendChild(optionText);
                        }
                    });
                }
            }
        )
        .catch(function(err){
            console.error('Fetch Error->',err);
        });
        drop_down_menu.appendChild(newOption);
    }
