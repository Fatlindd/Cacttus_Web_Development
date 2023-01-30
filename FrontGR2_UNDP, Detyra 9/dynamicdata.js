function generate(){

    var nr_menu = document.getElementById("nr_menu").value;

    if (nr_menu > 21) {
        alert("Mund ti gjeneroni deri ne 20 foto!");
        nr_menu = 21;
    }

    document.write(`
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet">
                <link rel="stylesheet" href="style.css">     
                <div class="container d-flex my-4 justify-content-center align-items-center">
                <div class="row">
                <p class="display-5 text-center">Mire se vini tek Auto Cards</p>
                    `)
    for (let index = 0; index < nr_menu; index++) {
        document.write(`    
                    <div class="col-md-4">
                        <div class="card mt-4">
                            <img class="card-img-top img-fluid" src="img/car${index}.png">
                            <div class="card-body">
                              <h5 class="card-title text-primary">Auto Cards</h5>
                              <p class="card-text">Per me shumë info rreth vetures ne foto klikoni butonin meposhte.</p>
                              <a href="#" class="btn btn-primary w-100">Kliko</a>
                            </div>
                        </div>
                    </div>
                        `)
    }
    document.write(`</div></div>`)
}


                    