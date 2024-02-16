import React from 'react'
import { useEffect } from 'react';


const Depression = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);

  },[])
  return (
    <div>
   <div className='text-red-900 text-center font-bold text-3xl font-serif '> Depression
   <div className='flex flex-row pt-4'>
        <img src="https://media.istockphoto.com/id/1483361752/photo/young-asian-woman-sitting-on-sofa-at-home-feeling-sad-tired-and-worried-suffering-depression.webp?b=1&s=170667a&w=0&k=20&c=53pOe1hE542R8Er05xzcMc_JjwOGTcdSRrSJG1pfDdc=" alt="" />
        <img src="https://media.istockphoto.com/id/1433282948/photo/woman-hands-holding-sad-face-hiding-or-behind-happy-smiley-face-bipolar-and-depression-mental.webp?b=1&s=170667a&w=0&k=20&c=Mn1Dpkfok94h7m1PE_z5o9Q1bDRte3OTATUHJqEzgpo=" alt="" />
        <img src="https://media.istockphoto.com/id/1346569631/photo/young-woman-sitting-on-sofa-by-window-and-looking-outside-through-window-at-home.webp?b=1&s=170667a&w=0&k=20&c=_v1JjRhjokDZA3whmqnTmZPgoLkURInhdhbsQ9NPCwg=" alt="" />
     
         </div>
      </div>
         <div className='text-center bg-[#cd9575] font-bold text-red-900 p-5 text-2xl font-serif flex justify-center items-center mt-4 '>
          What is depression ?
          </div>
          <div className='flex items-center text-justify flex-col text-lg pt-6 '>
          <p className='text-lg font-medium '>
          Depressive disorder (also known as depression) is a common mental disorder. It involves a depressed mood or loss of pleasure or interest in activities for long periods of time.

Depression is different from regular mood changes and feelings about everyday life. It can affect all aspects of life, including relationships with family, friends and community. It can result from or lead to problems at school and at work.

Depression can happen to anyone. People who have lived through abuse, severe losses or other stressful events are more likely to develop depression. Women are more likely to have depression than men.
</p>
 <p className='mt-4 text-lg font-medium'>Depression is about 50% more common among women than among men. Worldwide, more than 10% of pregnant women and women who have just given birth experience depression (2). More than 700 000 people die due to suicide every year. Suicide is the fourth leading cause of death in 15–29-year-olds.</p>
       <p className='mt-4 text-lg font-medium'>Although there are known, effective treatments for mental disorders, more than 75% of people in low- and middle-income countries receive no treatment (3). Barriers to effective care include a lack of investment in mental health care, lack of trained health-care providers and social stigma associated with mental disorders.</p>
         </div>
         <div className='text-center bg-[#cd9575] font-bold text-red-900 p-5 text-2xl font-serif flex justify-center items-center py-5 mt-4'>
          Types of depressive disorder (depression) ?
          </div>
          <div className='flex items-center text-center flex-col text-lg  '>
           <p className='text-2xl font-medium py-6 '>There are several types of depressive disorders, including: </p>
           <p className='text-lg font-medium py-2'>Clinical depression (major depressive disorder):</p> <p className='text-justify' >A diagnosis of major depressive disorder means you’ve felt sad, low or worthless most days for at least two weeks while also having other symptoms such as sleep problems, loss of interest in activities or change in appetite. This is the most severe form of depression and one of the most common forms.</p>
           <p className='text-lg font-medium py-2'>Persistent depressive disorder (PDD):</p> <p className='text-justify'>Persistent depressive disorder is mild or moderate depression that lasts for at least two years. The symptoms are less severe than major depressive disorder. Healthcare providers used to call PDD dysthymia.</p>
           <p className='text-lg font-medium py-2'>Disruptive mood dysregulation disorder (DMDD):</p> <p className='text-justify'>DMDD causes chronic, intense irritability and frequent anger outbursts in children. Symptoms usually begin by the age of 10. </p>
           <p className='text-lg font-medium py-2'>Premenstrual dysphoric disorder (PMDD):</p> <p className='text-justify'>With PMDD, you have premenstrual syndrome (PMS) symptoms along with mood symptoms, such as extreme irritability, anxiety or depression. These symptoms improve within a few days after your period starts, but they can be severe enough to interfere with your life. </p>
           <p className='text-lg font-medium py-2'>Depressive disorder due to another medical condition:</p> <p className='text-justify'> Many medical conditions can create changes in your body that cause depression. Examples include hypothyroidism, heart disease, Parkinson’s disease and cancer. If you’re able to treat the underlying condition, the depression usually improves as well. </p>
         </div>
         <div className='text-center bg-[#cd9575] font-bold text-red-900 p-5 text-2xl font-serif flex justify-center items-center py-5 mt-4'>
          What causes depressive disorder?
          </div>
          <div className='flex items-center text-center flex-col '>
          <p className='text-xl font-normal py-6 '>Researchers don’t know the exact cause of depression. They think that several factors contribute to its development, including:</p>
        </div>
        <div >
          <li className='text-justify text-xl font-medium py-2'>Brain Chemistry: <p className='font-normal'>An imbalance of neurotransmitters, including serotonin and dopamine, contributes to the development of depression. </p></li>
         <li className='text-justify text-xl font-medium py-2'>Genetics: <p className='font-normal'> If you have a first-degree relative (biological parent or sibling) with depression, you’re about three times as likely to develop the condition as the general population. However, you can have depression without a family history of it.</p></li>
          <li className='text-justify text-xl font-medium py-2'>Stressful life events: <p className='font-normal'> Difficult experiences, such as the death of a loved one, trauma, divorce, isolation and lack of support, can trigger depression.</p></li>
          <li className='text-justify text-xl font-medium py-2'>Medical conditions: <p className='font-normal'>Chronic pain and chronic conditions like diabetes can lead to depression.</p></li>
          <li className='text-justify text-xl font-medium py-2'>Medication: <p className='font-normal'> Some medications can cause depression as a side effect. Substance use, including alcohol, can also cause depression or make it worse.</p></li>
          </div> 
          <div className='text-center bg-[#cd9575] font-bold text-red-900 p-5 text-2xl font-serif flex justify-center items-center py-5 mt-4'>
          What are the symptoms of depressive disorder?
          </div>
          <div className='flex items-center text-justify flex-col text-lg   '>
           <p className='text-xl font-medium py-6 text-justify'>The symptoms of depression can vary slightly depending on the type and can range from mild to severe. In general, symptoms include: </p>
         </div>
         <div>
          <li className='text-justify text-xl'>Feeling very sad, hopeless or worried. Children and adolescents with depression may be irritable rather than sad.</li>
         <li className='text-justify text-xl'>Not enjoying things that used to bring joy.</li>
          <li className='text-justify text-xl'>Being easily irritated or frustrated.</li>
          <li className='text-justify text-xl'>Eating too much or too little, which may result in weight gain or weight loss.</li>
          <li className='text-justify text-xl'>Trouble sleeping (insomnia) or sleeping too much (hypersomnia).</li>
          <li className='text-justify text-xl'>Having a difficult time concentrating, making decisions or remembering things.</li>
          <li className='text-justify text-xl'>Experiencing physical issues like headache, stomachache or sexual dysfunction.</li>
          <li className='text-justify text-xl'>Having thoughts of self-harm or suicide.</li>
          </div> 
          <div className='text-center bg-[#cd9575] font-bold text-red-900 p-5 text-2xl font-serif flex justify-center items-center py-5 mt-4'>
          Getting treatment for depressive disorder
          </div> 
          <div className='flex items-center text-justify flex-col text-lg   '>
           <p className='text-xl font-normal py-6 text-justify'>Depression is one of the most treatable mental health conditions. Approximately 80% to 90% of people with depression who seek treatment eventually respond well to treatment. Treatment options include: </p>
         </div>
         <div >
          <li className='text-justify text-xl font-medium py-2'>Psychotherapy: <p className='font-normal'> Psychotherapy (talk therapy) involves talking with a mental health professional. Your therapist helps you identify and change unhealthy emotions, thoughts and behaviors. There are many types of psychotherapy — cognitive behavioral therapy (CBT) is the most common. Sometimes, brief therapy is all you need. Other people continue therapy for several months or years. </p></li>
         <li className='text-justify text-xl font-medium py-2'>Medication: <p className='font-normal'>Prescription medicine called antidepressants can help change the brain chemistry that causes depression. There are several different types of antidepressants, and it may take time to figure out the one that’s best for you. Some antidepressants have side effects, which often improve with time. If they don’t, talk to your healthcare provider. A different medication may work better for you. </p></li>
          <li className='text-justify text-xl font-medium py-2'>Complementary medicine:<p className='font-normal'>This involves treatments you may receive along with traditional Western medicine. People with mild depression or ongoing symptoms can improve their well-being with therapies such as acupuncture, massage, hypnosis and biofeedback. </p></li>
          <li className='text-justify text-xl font-medium py-2'>Brain stimulation therapy: <p className='font-normal'> Brain stimulation therapy can help people who have severe depression or depression with psychosis. Types of brain stimulation therapy include electroconvulsive therapy (ECT), transcranial magnetic stimulation (TMS) and vagus nerve stimulation (VNS).</p></li>
          
          </div> 

         </div>
       
    
   
  );
};


export default Depression