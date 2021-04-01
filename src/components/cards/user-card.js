export function UserCard(props) {
  return (
    <div className="flex flex-col items-center w-full max-w-xs p-4 mx-auto bg-white rounded-3xl md:flex-row shadow-md">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-base font-medium">{props.email}</h2>
          <p className="text-xs font-medium text-gray-400">{props.role}</p>
        </div>
        <div className="flex items-center justify-center space-x-3 md:justify-start">
          <a href="#" className="transition-transform transform hover:scale-125">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 492.49284 492"
              fill="currentColor"
              className="w-5 h-5  hover:text-green-300"
            >
              <path d="m304.140625 82.472656-270.976563 270.996094c-1.363281 1.367188-2.347656 3.09375-2.816406 4.949219l-30.035156 120.554687c-.898438 3.628906.167969 7.488282 2.816406 10.136719 2.003906 2.003906 4.734375 3.113281 7.527344 3.113281.855469 0 1.730469-.105468 2.582031-.320312l120.554688-30.039063c1.878906-.46875 3.585937-1.449219 4.949219-2.8125l271-270.976562zm0 0" />
              <path d="m476.875 45.523438-30.164062-30.164063c-20.160157-20.160156-55.296876-20.140625-75.433594 0l-36.949219 36.949219 105.597656 105.597656 36.949219-36.949219c10.070312-10.066406 15.617188-23.464843 15.617188-37.714843s-5.546876-27.648438-15.617188-37.71875zm0 0" />
            </svg>
          </a>
          <a href="#" className="transition-transform transform hover:scale-125">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 384"
              fill="currentColor"
              className="w-5 h-5  hover:text-red-600"
            >
              <g>
                <g>
                  <g>
                    <path
                      d="M64,341.333C64,364.8,83.2,384,106.667,384h170.667C300.8,384,320,364.8,320,341.333v-256H64V341.333z M116.587,189.44
				l30.187-30.187L192,204.48l45.227-45.227l30.187,30.187l-45.227,45.227l45.227,45.227l-30.187,30.187L192,264.853l-45.227,45.227
				l-30.187-30.187l45.227-45.227L116.587,189.44z"
                    />
                    <polygon points="266.667,21.333 245.333,0 138.667,0 117.333,21.333 42.667,21.333 42.667,64 341.333,64 341.333,21.333 			" />
                  </g>
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
