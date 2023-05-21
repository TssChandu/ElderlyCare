import Header from "../Header";
import './index.css'

const HealthTipsList = [
    { tipId:1,
      name: "Get active",
      imageUrl: "https://res.cloudinary.com/dzvngxapf/image/upload/v1684653105/get_active_ahw4do.jpg",
      description : "Physical activity is an immune system booster. The more you move, the more your body is able to fight inflammation and infections. The activity you partake in doesn’t have to be strenuous. Low impact exercises are effective, too. You might consider biking, walking, swimming, or low impact aerobics. If you’re able to, engage in moderate intensity exercise for about 20 to 30 minutes a day to reach the recommended total of 150 minutes a weekTrusted Source. Also, strengthen your muscles by lifting weights or doing yoga.Modify your exercise routine to find what feels best for you."      
    },
    { tipId:2,
        name: "Take supplements as necessary",
        imageUrl: "https://res.cloudinary.com/dzvngxapf/image/upload/v1684653041/take_supplements_slbv9w.jpg",
        description : "Some supplements help support a healthy immune system. Before taking a supplement, always ask your doctor if it’s safe, especially if you’re taking a prescription medication. Some supplements they may recommend include calcium, vitamin D, vitamin B6, or vitamin B12. Take supplements or multivitamins as instructed to boost your immune system."
      },
      { tipId:3,
        name: "Eat a healthy diet",
        imageUrl: "https://res.cloudinary.com/dzvngxapf/image/upload/v1684653048/Take_healthy_diet_chjalp.jpg",
        description : "Diets rich in fruits, vegetables, and lean meats also give your immune system a boost and protect against harmful viruses and bacteria that cause illnesses. Fruits and vegetables are a good source of antioxidants. Antioxidants protect your cells from damage and keep your body healthy.You should also limit your consumption of sugary and fatty foods, which can trigger inflammation in the body and lower your immune system.In addition, limit your intake of alcohol. Ask your doctor about safe amounts of alcohol to drink per day or week."
      },
      { tipId:4,
        name: "Wash your hands frequently",
        imageUrl: "https://res.cloudinary.com/dzvngxapf/image/upload/v1684653072/Wash_hands_vw8sza.webp",
        description : "Washing your hands on a regular basis is another excellent way to stay healthy year-round. Viruses can live on surfaces for up to 24 hours. It’s possible to become ill if you touch a virus-covered surface and contaminate your hands, and then touch your face. Wash your hands with warm soapy water often, and for at least 20 seconds. Avoid touching your nose, face, and mouth with your hands. You can also protect yourself by using antibacterial hand sanitizer when you’re unable to wash your hands. Also, disinfect surfaces around your home and workstation frequently."
      },
      { tipId:5,
        name: "Learn how to manage stress",
        imageUrl: "https://res.cloudinary.com/dzvngxapf/image/upload/v1684653099/Manage_stress_hcwcky.jpg",
        description : "Chronic stress increases your body’s production of the stress hormone cortisol. Too much cortisol can disrupt different functions in your body, including your immune system. To reduce stress, increase physical activity, get plenty of sleep, set reasonable expectations for yourself, and explore relaxing, enjoyable activities."
      },
      { tipId:6,
        name: "Get plenty of rest",
        imageUrl: "https://res.cloudinary.com/dzvngxapf/image/upload/v1684653087/Plenty_of_rest_nkvgiv.jpg",
        description : "Not only can sleep reduce your stress level, but sleep is how your body repairs itself. For this reason, getting an adequate amount of sleep can result in a stronger immune system, making it easier for your body to fight off viruses. Sleep is also important as you get older because it can improve memory and concentration. Aim for at least seven and a half to nine hours of sleep per night.If you have trouble sleeping, talk to your doctor to find the underlying cause. Causes of insomnia can include inactivity during the day and too much caffeine. Or it can be a sign of a medical condition like sleep apnea or restless leg syndrome."
      },
      { tipId:7,
        name: "Take steps to prevent infections",
        imageUrl: "https://res.cloudinary.com/dzvngxapf/image/upload/v1684653057/steps_to_prevent_infection_rqncan.webp",
        description : "Getting annual vaccinations is another way to stay healthy throughout the year. If you’re age 65 and older, talk to your doctor about getting a high-dose or adjuvant flu vaccine. Flu season is between October and May in the United States. It takes about two weeks for the vaccine to be effective, and it reduces the risk of the flu by 40 to 60 percent when the vaccine strains match the circulating strains. The flu virus changes each year, so you should get the vaccine yearly. You can also talk to your doctor about getting pneumococcal vaccines to protect against pneumonia and meningitis."
      },
      { tipId:8,
        name: "Schedule annual physicals",
        imageUrl: "https://res.cloudinary.com/dzvngxapf/image/upload/v1684653112/Annual_checkup_ltzfnj.webp",
        description : "Scheduling a yearly checkup can also keep you healthy. Always speak with your doctor if you have concerns about your health. Conditions like diabetes and high blood pressure can go undetected. Regular physical examinations will enable your doctor to diagnose any problems early. Getting early treatment may prevent long-term complications. Also, if you have any cold or flu symptoms, see your doctor immediately. The flu virus can lead to complications in adults over the age of 65. The immune system weakens with age, making it harder to fight off the virus. If you see a doctor within the first 48 hours of flu symptoms, they can prescribe an antiviral to reduce the severity and length of symptoms."
      },
      { tipId:9,
        name: "Avoid contact with people who are sick",
        imageUrl: "https://res.cloudinary.com/dzvngxapf/image/upload/v1684653309/avoid_contact_with_sick_people_ljgzox.avif",
        description : "Another way to protect yourself year-round is to avoid being close to people who are sick. This is easier said than done. But if there’s a flu outbreak in your area, limit contact with people who aren’t feeling well and avoid crowded areas until conditions improve. If you must go out, protect yourself by wearing a face mask. If you’re caring for someone with the flu, wear a face mask and gloves, and wash your hands frequently."
      },
]

const HealthTipItem = props => {
    const {tipDetails} = props
    const {tipId,name,description,imageUrl} = tipDetails

    return(
        <li className="tip-list">
            <h1 className="tip-heading">{tipId}. {name}</h1>
            <img src={imageUrl} alt={name} className="tips-img"/>
            <p className="tip-description">{description}</p>
        </li>
    )
}

const HealthTips = () => (
        <div className="bg-container">
            <Header/>
            <ul className="health-tips-container">
                {HealthTipsList.map(eachTip => (
                    <HealthTipItem key = {eachTip.tipId} tipDetails={eachTip}/>
                ))}
            </ul>
        </div>
    )

export default HealthTips