
                {user ? (
                  <div class="bg-indigo-500 w-full">
                    <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"

                      onClick={() => this.setState({ editing: {} })}
                    >
                      New Post
           </button>
                    <button
                      class="bg-blue-500 hover:bg-gray-100 text-white font-bold py-2 px-4 rounded-full outline-none"
                      type="button"

                      onClick={() => logout()}
                      
                    >
                      Sign Out (signed in as {user.name})
           </button>
                  </div>
                ) : (
                    <button
                      class="bg-gray-900 hover:bg-blue-700  text-gray-100 font-semibold py-2 px-4 rounded-lg"
                      onClick={() => login()}
                      canEdit= {() => true}
                    >
                      Sign In
                    </button>
                  )}



> button

                    <button class="font-small bg-indigo-500 hover:text-gray-100 focus:outline-none hover:bg-indigo-400 hover:rounded-full text-white font-bold py-1 px-4  rounded-full">
                Login
       </button>