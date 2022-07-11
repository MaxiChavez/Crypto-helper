export const Navbar = () =>`
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <input id="search-bar" class="form-control mr-sm-2" type="text" placeholder="Search" />
        <button class="btn btn-success" type="submit">Search</button>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2"
                data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
            </button>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                <li><a class="dropdown-item active" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                <li>
                    <hr class="dropdown-divider" />
                </li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
        </div>
    </nav>
`
export const Boton=()=>`
      <a href="https://facebook.com">Link</a>
`