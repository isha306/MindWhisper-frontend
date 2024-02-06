import { Select } from '@mantine/core';
import { useEffect } from 'react';
import Card from '../Component/Card';

function Types() {
  useEffect(()=>{
    window.scrollTo(0, 0);

  },[])
  return (
    <div>
        <div className='bg-[#f5f5f5] w-full flex justify-center flex-col mt-10  h-20 items-center' >
        <p className='text-black font-Salsa'>
          TYPES OF MENTAL DISORDERS
        </p>
       
      </div>
    {/* <div>
    <Select
      label="Types of Disorder"
      placeholder="Depression Disorder"
      data={["Depression (major depressive disorder) is a common and serious medical illness that negatively affects how you feel, the way you think and how you act. Fortunately, it is also treatable. Depression causes feelings of sadness and/or a loss of interest in activities you once enjoyed. It can lead to a variety of emotional and physical problems and can decrease your ability to function at work and at home."]}
      
    />
    </div>
      <div>
    <Select
      label="Types of Disorder"
      placeholder="Anxiety disorders"
      data={["People with anxiety disorders respond to certain objects or situations with fear and dread, as well as with physical signs of anxiety or panic, such as a rapid heartbeat and sweating. An anxiety disorder is diagnosed if the person's response is not appropriate for the situation, if the person cannot control the response, or if the anxiety interferes with normal functioning. Anxiety disorders include generalized anxiety disorder, panic disorder, social anxiety disorder, and specific phobias."]}
      
    />
    </div>
    <div>
    <Select
      label="Types of Disorder"
      placeholder="Mood disorders"
      data={["These disorders, also called affective disorders, involve persistent feelings of sadness or periods of feeling overly happy, or fluctuations from extreme happiness to extreme sadness. The most common mood disorders are depression, bipolar disorder, and cyclothymic disorder."]}
      
    />
    </div>
    <div>
    <Select
      label="Types of Disorder"
      placeholder="Psychotic disorders"
      data={["Psychotic disorders involve distorted awareness and thinking. Two of the most common symptoms of psychotic disorders are hallucinations -- the experience of images or sounds that are not real, such as hearing voices -- and delusions, which are false fixed beliefs that the ill person accepts as true, despite evidence to the contrary. Schizophrenia is an example of a psychotic disorder."]}
      
    />
    </div>
    <div>
    <Select
      label="Types of Disorder"
      placeholder="Eating disorders"
      data={["Eating disorders involve extreme emotions, attitudes, and behaviors involving weight and food. Anorexia nervosa, bulimia nervosa, and binge eating disorder are the most common eating disorders."]}
      
    />
    </div>
    <div>
    <Select
      label="Types of Disorder"
      placeholder="Impulse control and addiction disorders"
      data={["People with impulse control disorders are unable to resist urges, or impulses, to perform acts that could be harmful to themselves or others. Pyromania (starting fires), kleptomania (stealing), and compulsive gambling are examples of impulse control disorders. Alcohol and drugs are common objects of addictions. Often, people with these disorders become so involved with the objects of their addiction that they begin to ignore responsibilities and relationships."]}
      
    />
    </div>
    <div>
    <Select
      label="Types of Disorder"
      placeholder="Personality disorders"
      data={["People with personality disorders have extreme and inflexible personality traits that are distressing to the person and/or cause problems in work, school, or social relationships. In addition, the person's patterns of thinking and behavior significantly differ from the expectations of society and are so rigid that they interfere with the person's normal functioning. Examples include antisocial personality disorder, obsessive-compulsive personality disorder, histrionic personality disorder, schizoid personality disorder, and paranoid personality disorder."]}
      
    />
    </div>
    <div>
    <Select
      label="Types of Disorder"
      placeholder="Obsessive-compulsive disorder (OCD)"
      data={["People with OCD are plagued by constant thoughts or fears that cause them to perform certain rituals or routines. The disturbing thoughts are called obsessions, and the rituals are called compulsions. An example is a person with an unreasonable fear of germs who constantly washes their hands."]}
      
    />
    </div>
    <div>
    <Select
      label="Types of Disorder"
      placeholder="Post-traumatic stress disorder (PTSD)"
      data={["PTSD is a condition that can develop following a traumatic and/or terrifying event, such as a sexual or physical assault, the unexpected death of a loved one, or a natural disaster. People with PTSD often have lasting and frightening thoughts and memories of the event, and tend to be emotionally numb."]}
      
    />
    </div>
    <div>
    <Select
      label="Types of Disorder"
      placeholder="Stress response syndromes (formerly called adjustment disorders)"
      data={["Stress response syndromes occur when a person develops emotional or behavioral symptoms in response to a stressful event or situation. The stressors may include natural disasters, such as an earthquake or tornado; events or crises, such as a car accident or the diagnosis of a major illness; or interpersonal problems, such as a divorce, death of a loved one, loss of a job, or a problem with substance abuse. Stress response syndromes usually begin within three months of the event or situation and ends within six months after the stressor stops or is eliminated."]}
      
    />
    </div>
    <div>
    <Select
      label="Types of Disorder"
      placeholder="Dissociative disorders"
      data={["People with these disorders suffer severe disturbances or changes in memory, consciousness, identity, and general awareness of themselves and their surroundings. These disorders usually are associated with overwhelming stress, which may be the result of traumatic events, accidents, or disasters that may be experienced or witnessed by the individual. Dissociative identity disorder, formerly called multiple personality disorder, or split personality, and depersonalization disorder are examples of dissociative disorders."]}
      
    />
    </div>
    <div>
    <Select
      label="Types of Disorder"
      placeholder="Factitious disorders"
      data={["Factitious disorders are conditions in which a person knowingly and intentionally creates or complains of physical and/or emotional symptoms in order to place the individual in the role of a patient or a person in need of help."]}
      
    />
    </div>
    <div>
    <Select
      label="Types of Disorder"
      placeholder="Sexual and gender disorders"
      data={["These include disorders that affect sexual desire, performance, and behavior. Sexual dysfunction, gender identity disorder, and the paraphilias are examples of sexual and gender disorders."]}
      
    />
    </div>
    <div>
    <Select
      label="Types of Disorder"
      placeholder="Somatic symptom disorders"
      data={[" A person with a somatic symptom disorder, formerly known as a psychosomatic disorder or somatoform disorder, experiences physical symptoms of an illness or of pain with an excessive and disproportionate level of distress, regardless of whether or not a doctor can find a medical cause for the symptoms."]}
      
    />
    </div>
    <div>
    <Select
      label="Types of Disorder"
      placeholder="Tic disorders"
      data={["People with tic disorders make sounds or display nonpurposeful body movements that are repeated, quick, sudden, and/or uncontrollable. (Sounds that are made involuntarily are called vocal tics.) Tourette's syndrome is an example of a tic disorder."]}
      
    />
    </div>  */}
    <div className='mt-10 flex justify-evenly'>
      <Card image=" https://hips.hearstapps.com/hmg-prod/images/types-of-depression-gettyimages-1664309487.jpg?crop=0.7077929803688281xw:1xh;center,top&resize=640:*" title={"Depression Disorder"} title1={"Depression (major depressive disorder) is a common and serious medical illness that negatively affects how you feel, the way you think and how you act. Fortunately, it is also treatable. Depression causes feelings of sadness and/or a loss of interest in activities you once enjoyed. It can lead to a variety of emotional and physical problems and can decrease your ability to function at work and at home."}/>
      <Card image="data:image/png;base64,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" title={"Anxiety disorders"} title1={"Depression (major depressive disorder) is a common and serious medical illness that negatively affects how you feel, the way you think and how you act. Fortunately, it is also treatable. Depression causes feelings of sadness and/or a loss of interest in activities you once enjoyed. It can lead to a variety of emotional and physical problems and can decrease your ability to function at work and at home."}/>
      <Card image="https://www.simplypsychology.org/wp-content/uploads/mood-disorder.jpeg" title={"Mood disorders"} title1={"These disorders, also called affective disorders, involve persistent feelings of sadness or periods of feeling overly happy, or fluctuations from extreme happiness to extreme sadness. The most common mood disorders are depression, bipolar disorder, and cyclothymic disorder."}/>
      
      </div>
      <div className='mt-10 flex justify-evenly'>
      <Card image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRYYGBgaGhoaGBgYGBocGBwaGhgZGhoaGhgcIS4lHB4rHxoeJjgnKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGBIRGDEhGCExMTQxNDQ0NDQ0MTQ0NDQ0NDExND80NDE0NDQ0NDE0NDQ0NDQ/NDE0ND80NDQ0MTQxNP/AABEIAMkA+wMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQADBgIBB//EAD8QAAEDAQUFBwIFAwIFBQAAAAEAAhEDBBIhMUEFUWFxgQYikaGxwfAy0RNCYnLhI1LxosIUJDOCkhU0g7LS/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABsRAQEBAAMBAQAAAAAAAAAAAAABEQIxQSES/9oADAMBAAIRAxEAPwCuhTLiAEYbKQJkGM4K4sLgHY4SCJ8PsjGC6HS8OmYAiccNFgDMarmNXjArWNUV01qsa1eNarWtQQNVjWqNCsa1BGtXbWr0BQgIIGr0gAT56Ie2WtlMXnuAHEx/PzoshtbtVMim2f1uHo0n1/hA/wBrbfpUcHOxOjRLjyDoEcVlNodrXuJ/DZdn8zzLsh4eJ++brVHuc5zsXE5/PnJLa9rAGc8j7rWIPt+0HvJdUeXHiSY+yV1bcNxPUAeiEq1nO5DcqVZBbUrudmcNyqXsYLxUW0azmmWuLTvBhN7Ht1zcH94b8AfLA+HVI1AUG6sdvY8S13QnEJ1ZNp1GfmJboD3hy3gcl8up1CDIJB4GE2se3Xtwd3vDHpv4qYPq1l2yx8B3dP7sE0DgcRj84r5lZNqsfrB8s8idD8xTizbRfTPdJI3Ez0EzCmK2kLkpPZNutdg4QfXDzKb03hwkGR8wI0KyOHhVOaiCFW4IB3hUuCJc1UvCAZ4Vd1EPCrhBGNRDAqmBEMCCxgVzAuGBXNCDprVa0LxoVjQg9aFYAvGhdgIIAl+19qMs7ZOLjN1sxMak6N4/dF2y0tpsc95gNBJ+fM18t2ntB9Z7nvOZy3DQdFR5tXar6zi556DAAaADQee9LXVNTovXuw+Yk5lKdo1/yg8/ZWRHlstxdg3LXj/CXkqKLQ9a6FDC8UQRRQKIIovQ1eQgiikKEILKVQtMgwVodmbZBAY/dnn8HnzWdZGvjuXocWmQYI1CDdneDhomWzdqPYYJkZY7tx3jdu8jlti24ubBxIzaM43tGvLwTkwWhzcR6fws0bmz2lrxLeo1x9l24LI7LtpY4SYG/dPt8zgrV0qs4HAxOGRG8H2081FeOCpeEQ4KpwUAzwq4V7wqoQesCIYFQxEsCC5gVzAqmBEMCDpoVrQuWBWtCD1q6DV5C5tFZjGl7zDWiSc4CDJdu7cQGUm6mT0xH3WKFMnkme3bf+PVc/ENiGznG/Del9N+mrjHQFaiBLQboOu77rOF0mSnW1bQILW548gMvukZCsEUXUarplMmOaorURL6Ba4A5GMlz+EJiefoYQUKBGG6WxOWWGMZdTwXgoC7PyN6mgcvwhcLt0LiFR60r0nBcqIIujiuV610ILrJaCxwcNPkLb2So0gOb9LgDynPzWBWu7OVC6lB0cWjlE+UqUMyyJWj2Jar7Sw5txHImCPT4Fnnu0KM2LULazI/N3T1z9JUo1pCrcFdoq3BZVQ8KpXPCrQeMRNNDMRNMICGBXMVLVewILWhWNC5auwg8cQBp7CN8rIbWtptEun/AJdhgDR7hhg38xOQGgzzMMO0NqLy2zMOL8XwYIYN50njoPDLbR2gBIZd7rSynH0sZEPc0H8zjIk4xJ1VCetVkl2pJJ1zM5oGtarhAb9Ry1I3kq2vVDQSdPskr6hxc7Au443dwViPLUYhs7y4zMu56lUVDMH5gcPJeVX3jMRoANAuAtAlpGEjAjoMV6XxlkfWPuhi7CFJwUDi1w6k14+pufiCfVLg8EEHWCOB+Ephs14cHNOoy3wMT84pVWZdcW7jCRXVJ2h1917RqEGNPh9lXSzXddsGVUeVxjhz8VUrHEnHXfvXkSJ3IOFFFEEUUUQWUad5waNSB4mFs9lsAptaBF2QR+oHHzWIBWt2Lab0EnF+J/ewAHxbB6FShucfnim+waIa5rzjN5rTuIGI6ifBKYRuyqhvFm/vN3X2zHjkpRrSFw8L2m8OaHDIgFeOWVUPVSteq4QeU0TTQtNE00BFNX01RTV7UF7V5WqBrST4L1iotmLfXqCPQx4oMw+0XKFWqfqeXide7/TaN8XmuPGeixned83D54rVbcaW2UgYH8V4dv8A+q8YeE9Vmz3WYES5uW6XQPJagUWoSW5RJw33R98Ertr5ceGCbPZDmT+r0kDyPiktT6jzPkrEVqBQrpoOio5IUCsDCdFGNnDXRB4x5BBGBGRXdoq3jeOZzjJWNsLz+Ujmuv8A0+pMFsHcdeW9TYuA12XkiEe3Y1UiQARvBw8Vw/ZVUCbhMZxifDXomwyhqD4PD4MeCOqWMt7zciJg4gjn4hAuszhmI3ceSY7PqvabuY3cTkf0nDPmlCtzY4KNEjkndusktJDbpiYgAHi05eCXjZ7rhqSIGMawkpgIheIlr5EEfN/BcfhSYEc1UUrQbGcRSLv7X3xv7rYdH/aT1SFzYMFaTs44Xbp358Dp5HxUoeh8gEIrZxP4rIzvD7+yX2ZkAt/tMDkRLfIx0R+znQ9p3eeiyNRY3ReZuMjk6XD3HREOQwza4ftPImG+ceJV7lFVPVSseVWg5plE00IwolhQFU1exDMKJagvaV5dw9eeKjV2ckGN7UsuB4nuucyo2d95rXjjDgD/APJzWZtllcy7AMFgdGHl46rZ9sKTTZnEjEOaQdR3oPkSEg2pUa1lORk0tunPANJB64T64KjM2uCyYN5pmY5+xI6JRYrN+JUuZ/VERoCm9VuOOC57LNb/AMYARhL+ndcZ8lryhPb7E6k6HNIGnFW7NY0k3iMcgfXitl2rsrX0bwGLBM8onylKR2fa5ogxh7cFN+Ljy22RgpMfk6M9Tju/Niq9l7JbWIJEb8/8yt12b7MU20WEiXXcTGuMlHbF2Mxr3tGRdIA4gFZXCR+xw1uhwz0S1tAgxcL24mRiBA8+Wa39bYTC4k78vnz1XZ2MxwDI0+ep8VMVndl2Si9l5gad4BHpmDih7Wyiw3TUY07rwLuV0SekLR2nswx4gtGoyGVyo6cd7yz/AMdJVdk7IMa7vYtj6dJxmOE4jkOKYjH1LMysYLCBGBe26XTqAchzxJ03j0+zbb96Q1oOZgSJyOOa+mWjZDIy4ZZAnEjpKVnYbC43RDjoB/G70QZ+02Nj7tNpL5mQJiBvfEajil+2th3WOa0fkdHGCB05LbWKwNZUMZhonqTPoF7bqQJf+0R4u/hFfELPZiJLldSoANvakGZ5Iq3tILxliR1mF49vcjet6yS2psFPNjM+ktww724xlI3jvY8Es2rTIcDGiL2DXhwHT7eavjLSj6gdSLp5gXh5XvFH7PpguIO4/wCRxQL26je08u9B8iVfZql1yyNXSaSy6TmInUTrznzCta+8AcpEngdR0OHRU2Z8sB138V2zC8P1H/VD/wDcoqPVa7cqpQV0yiqZQdMoqmUBbCr2IZhV7CgIaV0/JVsK7KBdtqjfpPbvGHt5rJWxg/4kh+V0Bk63cCJnOZ8FtrQMCPmcrGdp2AObhjoefzyQZy1m87DLTjOccF52eoj8V5/NccR0uExxglW1TJGEQDhx+Qps1pZaGH+4Ecw5h/hUbG2Wdj6IbEhzTPI5z4x0SfZZgXCcWktPTI9RB6p3ReLpjUEBJBQLKpf+V8TwMCD4DyCjT6BYWgMZGVxh/wBIXdnphjw7fgeeY8kLsetNFsnSPBxaPII61Mlog44GeI/lRV5fK8pP7yGoPDgCDzHqvKb4eRKB0SICpe4BUtqCFzVdAlBbVqYKmzUwGXiJkzlvBj28ENXfPdGZwRtZ11sRgEAWym3ml5H1Y9Mh5Iao0X38ACfNG0nBlMaSB6JPWqXaNSqfzXiOQ7o+/VB8r2j365AjvOe7wcYVdpb3eoXrcanL0leWp0ugZTPh/MLTJZtWpJA3f49lTY6l1wO4z01+cF5bXS8rmytlwG+RjyWvGWxc/uE7xHiYHqjC/GeMpVsx15jJEAAcyRhluETz5YsGBZGk2U/u3dxHgcR5eiOY7F/Mf/RqTbMfDhEEuZlpIOMnkm7WwN537ySST4k+KiunFVrp5VUoKqZRDCg6TkVTKA1hV7ShGORDHICmFWAqhhVrSg5qtWL7T41qbRx8dPAFbVyxvaYXa1In+4+N0R6BAjt7AKrwMmj0AHqVY0XajS78gAb/ANxz8J8VXazL3x8AiSqu0LnMJILcWgRIJwykaKjWbPP9C9xgdM0PtNt1j3/2gHwEr3ZdQOoNO8g+Mk+yOqUr1N+QmJnDDFZaG2B16jDTllHAyr2VXkYS7gFnezNvuF9N/wCUtLeLSHAc8o6LR2fbVEYEkTMggiOGOSjQelYCXEl7wZDoDnXROkAwcZRTLOWEy4uLjM+wGgQ1t2xRpkOvgDU6XTljw9yuKvaWzCD+I3nPDL5uRfpsxr3YEkDeMCV2yldwvEjODM+JOSAs22qDxfa8GNxVNo2wzGHid06omG9kbeeTo0dJP8eqvt9p7t0ZuwHUx7qiw1mBt28CdeJ1VVYC+3x6NH3IVR3tQ9yBnl4pX2nIZZbuQDR5BHVKt4wMybo5nM9Asr2+tsj8MZTB8Jjw9UGJpuMl3GPBc4XnHguiYb5+KEq1oa53QdFpkqtH1Hmr9mCajep4YA58EI4o3ZeFRpjl6e614y0Wyz3CNxd5OI9APFH00u2eIbO8k+MEepTKmNNVlTmx4fhng71B9k3JSizGbgGgd53fvgmTXYDkoPXlVyvXuVUoKKRRdMoCk5FU3IDmFEMKDYUQxyKLYVa0oZhUtFpaxjnvMNY0ucRiYAk4Igmo9rWlziGtAkkmABvJOSwPaTbNOq9n4UuuOm+RDTpgDj1wS/b/AGgfaXQJZTH0snM/3P3nyHmlIergIqViS4znnogbZaGtEHExkPfcqbZa7stH1b938pWTKsiPoHZm1F1Bjd0jwwTpzpzWQ7JVu65u53qP4K1TXKNBXUyH32iXBpIH9wEEt6gGOMJ/Zrr2h4xBAxzwSqk/vsP6gPHu+6bbOIY8s0dLm+MOHQ+qzWpXL7OBIa0CdwHNA2eyw4sdzaTqPuCI6LVtc2Er2oxoh4GLceYjEKNfoutFNgxLRI1gIrZVlNSHOyH0jTDWOkLuys/FxyZv38vun1BrWiIwGGG4IWvKhDWpbZnkuLpzwHAZk+i7t9pE3QZJ0VTHhgzkny6IgthDSXbgfNfO+1tqDixgPeJL3cA7+MOifdoNthjCAccv4Xz2paLzi9xknM/NFeMZtW13yYQFreIA0A/wrRVEk7gUsq1C4ytyMuExpCKcjPCOpjTgUuRlO0i6GOGEgyM4/wAK1GmseQ6eiZWMS/5wSqw1Wub3XA7945jRHWe0XDMSsqdWA993A4ef/wCv9KYgpPs+1sJMm6SdcjgMj0TUuUEeVXKjnKu8gHpuRdNyApuRVNyA5jkSxyBY5Escootjlj+2O3SXGzMMNEfiHVxzDOQwnecNMdY1y+ZdoY/4mtdMi+7x1HjIWolBSuatYNaT4c1AUPbj3Rz9lpAVR5cSTmVwooqNH2Szfu7vutiwYLM9nLNdYDq7vHlp5Y9Vo6Lli9tPMbzf3D1CL7QOLbrgYcDIIzHyVxYqZdUBjBvePTIeMIftE892d6ze1nSyj2geBDmyd4+xR9mrOtDS4gtZlxcRnyAWTaC4gDMkAdTC2tAXGBjcAGwPDVSrA9ktJp4D6dG7uW5GjaZcQ1rcT8mUjdVV9gfm7oOWvzgqhqQGyTiTmfmiV7Qt4Y0knJeWy1QDisdtS3F5/SMuPFSQtDbTtRqOl2Wg3D7pVWqQiiMC45BK6pxXSJXRq4Eb1UootMoooog7p1C0y0kEahaPZ9vFQQcHDMb+IWZXVN5aQQYIyKDYEo7Z20iw3XElmXFvEcOCTWO1fiNvajBw4/ZWkrA2F8HEGQciq7yS7Jt10hjj3Se7wP2PqnEooWm5FMcgabkVTcoDmORDHIJjkQxyKJNW6C45AEnoJXyqpULiXHNxJPMmSvou2Kt2z1T+hw8RHuvmpKvFK7QltdiB18f8IiUHaj3j0WoilXWalecGjU+WqpTnYNnklx5D3SjT2Zt0ADcPJGMchKaKs1MvcGjUxy4+6y0fbKof03OObvQZe6X7Wote9jTkAT6LSMpgNujCBASC3t/qt/afULHqgG7MuPa9pkBwJB3TitK+kA0nglbH95o/UPVOLSe4eR9Eqkv/AKeCwY4qWakWtIOYJ88fdHt+kclRd7pPE+qUZvbr4AaDnnyCS07EX8tStHtKy33sJyxnyVNdt0YCdAAI9vkqxGe2owMbdwAWdeZJPFONp1wSZxdiMPpbwk5nikwC3xZqQvF64rxaRFFFEEUUUQH7Jq3Xxo4R1zHzinUrN2cw9p/UPVaAlSjqVp7K6+xricSMeYwPmFlSURTtJAAlZU3Y5FMcgGFFMcgOpuRDHIFjkQxygG7SVYsz+N1vi8LAStn2rf8A8vH62/7isXK1Er2UFWPePNGSgn5nmVYI1skAZlauwUbrQ0aBINmUZdeOQy5rSUUqwawp92eoSS8/tb7n5xWfpNLiGgYnALYWFgYwNGQEfysVYYk4LN7UfFVvI+oT578Fn9oOmoP2n1CzFe2Z8vZz9indpf3Dy9kgsn1gdfAhN7Q/unkVaB2VZAVtP6UMDhPBE0h3QpVL7c2Mdx8v8LO7TtjDIBL4mbphvVw04LU2tsgjRZG07OqvcQSAwHDdExMb1YlZ6uS+dw3DAIFx0C19u2cynRfGJu58VkKoxW4zXCigCi0iKKKIIooog7p5jmPVP3FIKQxHMeqeOKlHUr2VVKua0lA2pvRVNyAYjGZLKjGFXtchGK9iBN2urdxjN7i7/wARH+5ZUlNe1H/uD+xnukzVYiy8hWiTGpV1X6VzZPrHX0K0HFjpBrQEwplB0vui6WSw0fbEo43yODfc+3itBTfCVbL+hnL7pkzT5qs1YtqVICz9sqf1ByPqE5rZdFnrV/1B+0+oSAuwv7/T3/hMrTU7p5JPYfrPIepR1r+k8ilHLX93p7JjTfglH5RyTKl9KUSuUpe+6SOqZ1Pniktq+sftPqFIF23K39Nw34eayFZaPbf09Qs5WXTilVkrxRRaZRRRRBFFFEF1mEubz9MU1JSqyfWOvoUzKlEvJ1Yafcb19SkS0Fj+hvJSq//Z" title={"Psychotic disorders"} title1={"Psychotic disorders involve distorted awareness and thinking. Two of the most common symptoms of psychotic disorders are hallucinations -- the experience of images or sounds that are not real, such as hearing voices -- and delusions, which are false fixed beliefs that the ill person accepts as true, despite evidence to the contrary. Schizophrenia is an example of a psychotic disorder."}/>
      <Card image="https://www.mayoclinichealthsystem.org/-/media/national-files/images/hometown-health/2016/2016-womens-health-month/hth_eating-disorder-350x350_513-(2).jpg?sc_lang=en" title={"Eating disorders"} title1={"Eating disorders involve extreme emotions, attitudes, and behaviors involving weight and food. Anorexia nervosa, bulimia nervosa, and binge eating disorder are the most common eating disorders."}/>
      <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-I047hhPKNXhXkwX2Los4R3CDyt-HykYzhQ&usqp=CAU" title={"Impulse control disorders"} title1={"People with impulse control disorders are unable to resist urges, or impulses, to perform acts that could be harmful to themselves or others. Pyromania (starting fires), kleptomania (stealing), and compulsive gambling are examples of impulse control disorders. Alcohol and drugs are common objects of addictions. Often, people with these disorders become so involved with the objects of their addiction that they begin to ignore responsibilities and relationships."}/>
      
      </div>
      <div className='mt-10 flex justify-evenly'>
      <Card image="https://assets-global.website-files.com/60f6e865ae602f46c6928ee6/60f6e865ae602ff52f92901e_bpd.jpg" title={"Personality disorder"} title1={"People with personality disorders have extreme and inflexible personality traits that are distressing to the person and/or cause problems in work, school, or social relationships. In addition, the person's patterns of thinking and behavior significantly differ from the expectations of society and are so rigid that they interfere with the person's normal functioning. Examples include antisocial personality disorder, obsessive-compulsive personality disorder, histrionic personality disorder, schizoid personality disorder, and paranoid personality disorder."}/>
      <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxLUGy-TR_3ZecZ-AoXhkQZbfucY7invyV0g&usqp=CAU" title={"OCD"} title1={"People with OCD are plagued by constant thoughts or fears that cause them to perform certain rituals or routines. The disturbing thoughts are called obsessions, and the rituals are called compulsions. An example is a person with an unreasonable fear of germs who constantly washes their hands."}/>
      <Card image="" title={""} title1={""}/>
     
      </div>
      <div className='mt-10 flex justify-evenly'>
      <Card image="" title={""} title1={""}/>
      <Card image="" title={""} title1={""}/>
      <Card image="" title={""} title1={""}/>
  
      </div>
      <div className='mt-10 flex justify-evenly'>
      <Card image="" title={""} title1={""}/>
      <Card image="" title={""} title1={""}/>
      <Card image="" title={""} title1={""}/>
      
      </div>
   

    </div>
  );
}
export default Types