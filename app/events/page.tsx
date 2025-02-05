// import styles from '../../styles/Events.module.scss';
import logo from "@/assets/images/envalogo.png";
import Image from "next/image";
import { Icons } from "@/assets/icons/icons";
export default function Home(){
  return(
//     <section className={styles.section}>
// 	<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// 		<div className="col-md-4 col-sm-6 col-xs-12">
// 			<div className={styles.card}>
// 				<div className={[styles.cover, styles.item_a].join(" ")}>
// 					<h1>Treasure<br/>Hunt</h1>
					
// 					<div className={styles.card_back}>
// 						<a href="#">Register</a>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 		<div className="col-md-4 col-sm-6 col-xs-12">
// 			<div className={styles.card}>
// 				<div className={[styles.cover, styles.item_b].join(" ")}>
// 					<h1>Tropical<br/>Leaf</h1>
// 					<div className={styles.card_back}>
// 						<a href="#">Register</a>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 		<div className="col-md-4 col-sm-6 col-xs-12">
// 			<div className={styles.card}>
// 				<div className={[styles.cover, styles.item_c].join(" ")}>
// 					<h1>Marijuana<br/>Chill</h1>
// 					<div className={styles.card_back}>
// 						<a href="#">Register</a>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
//     <div className="col-md-4 col-sm-6 col-xs-12">
// 			<div className={styles.card}>
// 				<div className={[styles.cover, styles.item_a].join(" ")}>
// 					<h1>Treasure<br/>Hunt</h1>
					
// 					<div className={styles.card_back}>
// 						<a href="#">Register</a>
            
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </section>
<div className="animate-fade-down animate-duration-[1500ms] animation-delay-[1500ms] flex flex-col h-screen bg-center bg-cover bg-no-repeat text-center">
<div className="grid place-items-center w-4/5 mx-auto p-10 my-20 sm:my-auto bg-white-600  bg-opacity-70 rounded-xl shadow-2xl space-y-5 text-center cursor-pointer">
  <div className="p-2 flex justify-center w-full">
    <Image
      src={logo}
      alt="Enva Logo"
      className="sm:w-1/2 h-auto text-center"
    />
  </div>

  <h1 className="z-50 text-4xl font-extrabold uppercase text-white transition duration-500">
    Coming Soon
  </h1>
  <h2 className="text-xl text-gray-700 transition duration-500 text-left">
    We are almost there to introduce our <span className="font-bold text-red-600">Events</span> , in the meantime,
    you can follow us on social networks to get the latest updates.
  </h2>
  <div className="w-full flex items-center justify-center sm:gap-10 gap-4">
    {Icons.map((icon, index) => (
      <a
        href={icon.link}
        key={index}
        className="tracking-wide font-bold rounded border-2 border-red-400 hover:text-white hover:bg-red-600 shadow-md py-2 px-6 transition duration-500 z-50 items-center"
      >
        <span className="mx-auto">{icon.name}</span>
      </a>
    ))}
  </div>
</div>
</div>
  );
}