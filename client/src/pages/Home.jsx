import React from 'react';

const appData = [
  {
    name: 'game',
    img: 'https://cdn.dribbble.com/users/465131/screenshots/14718799/media/ca9b2df64b8b4510ec4957a363038f6b.jpg?compress=1&resize=400x300',
    url: '/game',
  },
  {
    name: 'music',
    img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASDxUPDw8VFRUVFRUVFRUVFRUVFRUVFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDgcNDggNDisZFRkrKysrKysrKysrKysrNysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAAAAQIDBAUGB//EADwQAAICAQEFBQcBBQcFAAAAAAABAhEDIQQSMUFRBWFxgfATIjKRobHRwUJSU4LhBhQzYnKS8RYjJLLC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD8QQwoZUSMYACJGOgFQUVQUAgKoKAmh0VQUBNBRdBQE0FF0FATQUVQ6AmgougoCaHRVDoCaHQ6HQCoaQ0ikgEkaRQ4xNIxAcUawRMUaxQFwRtEzgbRA0iawZEDTQCt/vAkAPjQoYMBC4j4lUAqCiqHQE0Oh0MCaHQwoBUOh0FAKh0MAFQUUAE0OhjoBUAx0AqCiki91L4n5Li/x4sDM2jss2t7clu6e801FX38Cf7xJfAlDv8Ail/ufDyo49oyOTuUpSfWTbf1A+i/6eyrjPH/AL0S+wdo1cYKaXGUZRa8Nadnzu9/lXyNseaUfgnKP+ltfZgejPBKPxRa8U0OKI2Lt/asT93LvLmsiWRPu97VeTR7mw9s9nZ/c2zBLZp/x9ntwv8Az4XdLwtvqgPKSLij2O1P7O5cMFnxyjnwPhnxPej/ADrjB/NXpdnkoC0jSJMS0BomWmZplWBYiAA+UZK1BalpACQwGAUFDABDAYCGAwEMAAAGAAADAVDoBgFFQi20krbdJLVtvgkupLdH0H9ns0MGN7Tkx6NuMZppyTSt44r9iTV+90vUDxs+KWJuM4uM1ykqce9p/T1fK5N8PNvid3am35NpyvLk6KMYr4YQXwwj3L9W+ZzbgGDh1JWNnUoFqAHPDCN4TpUR7oHFLCZuJ6DgZTxAb9hdv7Rsk97DPR/HjdvHNcGpR61pa1PovZYtqg9o2SG7Jf4mBcYvrBc10rR8qfunxs4GnZ+3ZMGRZcTqS+TXOMlzT9age5EtM7NtnjzwW14klvf4kealpba620n1uMtN+lwpgaWNMix2BViJsAPmkhgMAQwAAABgAAADAAAAGAAMAQANDSGkAqAcpJHe9m2d4oyjnqb4wcZcfHh9QPPjBSbuVaaXwb6PmlXMjCm3XJfIbTT3GdOKGgCUR7pqoj3QMt0aRo0KgEkMBoAoUolDYHJlxnHkiepOJxZoAdHYW3PHN438M9GuW9TUX524/wA18kenONOr8PDkz5trS+h72DPvwUm9efjz+u8Bqh2RvDsCgIsAPBGhDAAAYAADAAAAAYAADEMAKoRSAEjfFhtN8XwjFfWUui7ub6JM55s22bLu6p1+i5y/RAGTZGuKv8o3hsPtY+0ScccEoub/AGpc1BL4pPohRy+1nuXuwSuTuvdWu7Hvf1b6JHrZtu9klkePdnX/AI0Hcf7uk3vNpaTk+dq/0Dg2ns+ONXOVOk1F65Ffw764LTkuj101yiu9PvXA4s+Zye9J29Tr2dLdT63p939fowNEh0C9evX5oDNok0aIAXr16/qAADQ0SMByOXOjpbMMwHElq13Hd2VL3Wumv2r9TkgveOnsn9rwA7rHZAWBVgQ2AHkAAwAAABgAAAAAAMAABgADRSJQ29AIctfXBcSZT0rqTfrwFFWwPU7Pgt1q1Vbz1jxV7qpvvbfq+XaMrlJybbb5vj5vm+8HPS+N9atPy1+YKPu2/EDkWsj0tni+laebvr+DHYcMV7+TSPHz5L6PqdOJaX11/AGq9evX5pMlFAD9evX4hosTAzYimvXr1+ssAGSADZjlNWYZmBhj+Kzq7Nj7kn4L7P8AJyQlrXzO/BKoKFVTbbvjfVAaCsTYrAqwIsAPNGIAGMneXUe8gGAAADEMAABgACABik9BNmcpASmWuH0FONeIJ/cDeTVc/ClX3OvHs0p6JUkrk26SS7/I8+/eN5bQ37sW6ql4Xdvz1A7NsyRlNQxpbseLTbUteOvdSXcivXr1/XLZsdRtK+ro0UkBaY169evxKKAqhNDQn69evyESM2zWSMpAIBCbAJSOTPk5I1ySMcWOUpVFW3wX38EBGzN2/dbrj3HoLvK3VFbkXfOUv3n3dy5eb5kWBQBYrAYCpdQA4N7qvugaj0f0ZnvBYGkUvSG66/T+pnbGodQGpK6sTn3MpIfrwAlZEWTOBMQNAEmAAAEsBSkTBa68hU26Rc9PdXn4gTJ2IEbQwS/db8mBChfEIcdDdwaVyi0n1VI57SenqwPR2TbssajjeraSjSp8KVVqz0odpZLTngxSqT4w1bUKaqLVrRvx1PBwtKSe8463dWl0do7ti2vNH4MkeDbTa1tNP4uL95v/AIA6J7TFuvYJapvdlNXS5bydX8T040GSa5QktebUvro9DbZNp23G1NYpSjpOt1Ti9N1Oo9zr5dDvw9sbVuOOTYXNtSSfsJ729XVLjWtd1gefs2Lfai1T66Vrw8F5k7RicJOMlTXI6ds7V2iaqOzPHok/ckrWsve3lT6/I89rNLeck5OEXKUY+84Qi1FylWkYrgBdg4owWeFW5S8FG/u0JbdWZSq4xpqNKNro+OulXfhQFyiuplNo6J9oRnknN41FNKl8dPmk53f81l4+2ZwX/bx4lK79rLHDJl7qc04xr/LFPvAzxdlTlBZsjWLE+GXJaUuvso/Flf8ApTXVriRPNBLcwxcYc5Sr2mT/AFVpGPSCvvcnqY7RtGTLN5Ms5Tk+MpycpeFvkEQLEIAGArCwGBN94AcNDoAAaGhDAYCGA0/l64B7O/h17ufy5+QhMBvoLU1W0S4N2ukkpfcbzL+FDy31/wDQGN9xePDKWtUv3nol5sr29fDGK8r/APazPJNy1k2/HUCpTjHSOr5y4eUVy8TKMukV56hQ0gLjnnydeGn2KeefOcvmyEiZsC57TNrdcm0uCbbOe9SkMBDi36oehSS/5pgOMpLg2vC19jb++5v4s9OHvz/I8UIv9qF96mvqlQ8mKv4f8s0/s2Brsez5s0lGDlOX7tu65tW+iPpI7BLB2Xnlki4PJKMEuDbU9V30uKPk99x1jKn3LX5m2XtTLLCtnlNuClvU23r1+3yA5d1dWJQ1u2JMqKAuU2JIaiUgKiiiR2BVisVhYBYmwsQDsCRgcoAADAQwGAhgMQAAhgIBiAAGMQADZk2XIzYDTHZIwKsCbGkBcWVZKKSAlgol0FACiaRRKGBYrFYAUhkisCgsVisBtgSMBgIAOYYgAYAADABAOxiABiAYBQAAAIYmBLIZoS0BA0OikgEkUCRSQAikAwAAABgIYBY7EAFWBIAOwsQAOwQgsB2ArADnGAAAwAAAYAADAAAAAAAAAQAACoAAdDoAAaQxAAwAAGAAAAAAAAAAOxAAxAADEAAAAAH/2Q==',
    url: '/music',
  },
  {
    name: 'social',
    img: 'https://static8.depositphotos.com/1005738/908/v/600/depositphotos_9080572-stock-illustration-social-media-talk-bubble-texture.jpg',
    url: '/social',
  },
  {
    name: 'sports',
    img: 'https://getwallpapers.com/wallpaper/full/d/3/8/371378.jpg',
    url: '/sports',
  },
  {
    name: 'tools',
    img: 'https://img.freepik.com/free-photo/top-view-many-tools_23-2147773434.jpg',
    url: '/tools',
  },
  {
    name: 'development',
    img: 'https://media.istockphoto.com/id/871030872/photo/programming-code-abstract-technology-background-of-software-developer.jpg?s=170667a&w=0&k=20&c=4Hxpl5eAm5YAKyuA3qMVEJ62TMEV4dYasWBZ_RwcyKQ=',
    url: '/development',
  },
];

const Home = () => {
  return (
    <div className="h-full bg-primary text-white p-8 overflow-y-scroll">
      <div className="h-1/3 ">
        <div className="h-full w-full flex gap-2">
          <div className="flex-[2] flex h-full bg-[#272b39] rounded-2xl p-2 drop-shadow-lg">
            <img className="h-full" src="work.png" alt="" />
            <div className="flex flex-col justify-center gap-1 p-2">
              <h2 className="text-xl font-bold">Lorem ipsum dolor sit amet.</h2>
              <p className="text-xs">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perspiciatis quisquam expedita iusto reiciendis sunt?Lorem ipsum
                dolor sit amet Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
              <div className="p-3 w-full flex justify-end">
                <button className="bg-indigo-800 w-1/3 rounded-2xl p-2 flex items-center justify-center">
                  continue
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col h-full gap-2">
            <div className=" bg-[#272b39] h-1/2 drop-shadow-2xl rounded-2xl flex justify-between p-3">
              <div className="flex flex-col justify-center">
                <h2>Lorem ipsum dolor sit amet</h2>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque, delectus?
                </p>
              </div>
              <img className="h-4/5 " src="component_icon.png" alt="" />
            </div>
            <div className=" bg-[#272b39] h-1/2 drop-shadow-2xl rounded-2xl flex justify-between p-3 gap-2">
              <img src="mobile.png" className="h-4/5" alt="" />
              <div>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam delectus, consectetur fugiat in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-white text-2xl p-3 pt-8">Most Popular</h2>
      <div className="flex  items-center gap-4 overflow-x-scroll">
        {appData.map((e) => (
          <div className="w-1/3 h-36  rounded-lg cursor-pointer hover:scale-105 shadow-2xl">
            <img
              className="absolute w-44 h-36 rounded-lg opacity-40 shadow-2xl"
              src={e.img}
              alt=""
            />
            <div className="relative flex flex-col items-stretch gap-16 px-4 py-1 ">
              <h2 className="text-xl font-bold">{e.name}</h2>
              <div className="flex  items-end justify-end ">
                {/* <p>Lorem</p> */}
                <button className="bg-white text-indigo-700 rounded-lg  px-4 hover:bg-indigo-700 hover:text-white">
                  open
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="w-1/3 h-36 bg-indigo-600 rounded-lg"></div>
        <div className="w-1/3 h-36 bg-indigo-600 rounded-lg"></div>
        <div className="w-1/3 h-36 bg-indigo-600 rounded-lg"></div>
        <div className="w-1/3 h-36 bg-indigo-600 rounded-lg"></div>
        <div className="w-1/3 h-36 bg-indigo-600 rounded-lg"></div> */}
      </div>
      <div className="flex w-full">
        <div className="w-1/2">
          <h2 className="text-white text-2xl p-3 pt-8">New</h2>
        </div>
        <div className="w-1/2">
          <h2 className="text-white text-2xl p-3 pt-8">Topic</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;

/**
 * <div className="w-1/3 h-36  rounded-lg cursor-pointer ">
          <img
            className="absolute w-44 h-36 rounded-lg opacity-20 "
            src="https://cdn.dribbble.com/users/465131/screenshots/14718799/media/ca9b2df64b8b4510ec4957a363038f6b.jpg?compress=1&resize=400x300"
            alt=""
          />
          <div className="relative flex flex-col items-stretch gap-16 px-4 py-1 ">
            <h2 className="text-2xl font-bold">Game</h2>
            <div className="flex justify-between items-center">
              <p>Lorem</p>
              <button className="bg-indigo-700 rounded-lg  px-4">open</button>
            </div>
          </div>
        </div>
 */
