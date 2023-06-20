

export default function EmptyCart() {
    return (
        <div className="p-16 mx-8 md:mx-16 my-4 text-center md:text-left">
          <div className="scroll-m-20 text-3xl font-semibold tracking-tighter md:tracking-wider transition-colors first:mt-0">
            Shopping Cart
          </div>
          <div className="flex justify-between gap-16 ">
            <div className="mt-8 gap-8 flex flex-col" style={{ flex: "3 1" }}>
              <div className="flex flex-col justify-center items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="150"
                  width="150"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z"></path>
                </svg>
                <h1>Your shopping bag is empty</h1>
              </div>
            </div>
          </div>
        </div>
    );
    
}