import { useEffect, useState } from "react";

import "./App.css";
import MultipleInputs from "./components/MultipleInputs";
import RefBasics from "./components/RefBasics";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [completed, setCompleted] = useState(10);

  useEffect(() => {
    const setScrollCompleted = () => {
      console.log("event called");
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setCompleted(Number(scroll * 100).toFixed(2));
    };

    window.addEventListener("scroll", setScrollCompleted);

    return () => {
      window.removeEventListener("scroll", setScrollCompleted);
    };
  }, []);

  return (
    <div className='App'>
      <ProgressBar bgcolor='#ef6c00' completed={`${completed}`} />

      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
        eligendi officiis, facere officia culpa error obcaecati delectus
        ducimus, molestiae ut consequatur quas rem atque necessitatibus ratione
        libero. Eligendi, voluptatem necessitatibus. Corrupti quod pariatur eos
        nisi, illo voluptas! Eveniet voluptatum similique aut tenetur beatae,
        debitis perferendis veritatis quod amet saepe mollitia consequuntur
        officiis nemo ullam, officia magni qui voluptatibus? Architecto vel eos
        nobis quam quibusdam ducimus, numquam, laborum odit alias
        exercitationem, quisquam sit. Doloribus ad praesentium delectus quisquam
        quidem quis? Impedit obcaecati itaque aliquid eligendi alias ducimus,
        sunt expedita exercitationem porro autem ipsum temporibus. Voluptate
        reprehenderit velit libero pariatur ex hic necessitatibus ipsam ad,
        tempora atque facere eius iste quisquam, nemo excepturi quia, ea eaque
        doloribus. Officiis harum dolor eius nostrum, animi molestias, saepe
        culpa corrupti accusantium neque recusandae quam quasi aspernatur sit
        facilis. Excepturi porro illo iusto eligendi eos in modi! Architecto
        iusto exercitationem fugiat praesentium consectetur nisi hic corrupti
        sed aliquam, et fugit tempora corporis sint temporibus deleniti ex
        delectus perferendis voluptas aspernatur a. Porro voluptate, voluptas
        exercitationem, soluta rem repudiandae magnam eaque excepturi cumque
        ipsam distinctio rerum reprehenderit! Illo illum voluptate at vel dicta
        earum fuga error aperiam voluptatem, ullam tempore est repellendus
        adipisci corrupti ex, explicabo placeat commodi repellat. Quas, culpa.
        Consequuntur fuga dicta iure magni at dolorum, assumenda eveniet error
        ad accusantium dolores vitae nisi cupiditate rem ducimus nam. Deserunt
        maiores eaque maxime obcaecati consectetur iste culpa, illum nulla amet
        perspiciatis, assumenda sit vero vitae quam dolorem dolorum mollitia
        accusamus doloremque. Architecto soluta, odio atque deleniti
        consequuntur necessitatibus illum quis aperiam ipsam praesentium
        reprehenderit cum ullam, molestias quibusdam fugit, incidunt aspernatur
        accusantium? Maxime sunt rem eum laudantium quae blanditiis, porro
        sapiente commodi non perferendis ab, voluptatem consectetur atque! Odio,
        temporibus enim delectus quod veritatis sit magnam ipsam sequi veniam
        velit dolorum debitis aliquam neque sapiente recusandae totam in
        possimus eaque blanditiis. Repudiandae repellendus sint minus debitis
        vitae blanditiis earum adipisci commodi quidem. Similique sint deleniti
        dolor laborum voluptas eos facilis, laudantium ullam enim et quasi at
        iure modi, cum consequuntur alias nisi, temporibus quo! Beatae mollitia
        quibusdam ipsam, tempora dolor exercitationem iusto magni repellat
        reiciendis amet obcaecati porro dolores sed fuga aut nihil hic
        repudiandae doloribus, explicabo ex impedit possimus! Minus officiis
        optio quod sint explicabo. In maiores illum atque fugit ipsum
        exercitationem. Obcaecati voluptatibus mollitia hic? Voluptatem magnam
        blanditiis nulla nobis pariatur numquam magni iusto voluptates obcaecati
        rerum amet ipsum libero sapiente architecto, facere reprehenderit
        adipisci repudiandae quidem. Quae cum dignissimos optio maiores
        doloribus velit exercitationem dolorem sequi facere odio ab voluptas
        expedita animi aut, ea culpa. Similique corporis impedit blanditiis! Cum
        deleniti iure ut iste rerum nemo. Odit, tempora et expedita amet debitis
        voluptatibus dolorem ea quasi? Dolore consequuntur culpa sequi provident
        nemo nostrum, impedit laboriosam quidem corporis eos et, ab porro nobis
        veniam. Illum necessitatibus perspiciatis quod facere magni? Quam ut in
        qui incidunt! Blanditiis alias culpa tenetur praesentium? Suscipit
        inventore odio minus explicabo? Culpa consequuntur error ducimus
        praesentium itaque pariatur esse, repudiandae eos distinctio neque
        necessitatibus quibusdam. Ea cupiditate eos accusantium voluptas
        assumenda quasi officiis molestias fugiat error magni, dolor, vitae
        numquam amet omnis quaerat voluptatibus. Sed ipsum omnis, ab quasi
        quaerat beatae atque laudantium laboriosam inventore perferendis sint
        qui, maxime dolor nulla, natus non consectetur numquam architecto?
        Suscipit vero ad fugit blanditiis nihil alias soluta magni dolorum!
        Corrupti ab assumenda quisquam eos suscipit, aspernatur voluptatibus.
        Ducimus dicta repellat labore saepe sapiente? Quisquam aliquid iure
        laborum corporis repellat perferendis deleniti, explicabo quasi natus
        eaque dolor ipsam alias vero tenetur earum amet eum obcaecati, rem
        nostrum nobis veniam! Atque repellat cumque impedit at odit deleniti
        consequuntur perspiciatis, iste doloribus, error nemo neque possimus
        unde? Ducimus animi quod voluptatum corporis magnam voluptatibus nisi
        aliquam fugiat odio, laudantium nulla provident! Nesciunt quam sapiente
        beatae suscipit fugiat ipsa saepe tempora. Recusandae voluptate
        perspiciatis iusto magnam consequuntur aspernatur eos. Eum optio
        reiciendis exercitationem similique? Atque porro officiis exercitationem
        sapiente ullam, numquam nostrum cum ipsam quos harum ipsum iure facere
        quia nemo eius nihil optio dolorum quod voluptates beatae. Asperiores
        autem maiores fuga facere sint delectus numquam, illo suscipit
        blanditiis, ullam natus iste architecto vero sunt? Possimus, quia.
        Accusamus alias perspiciatis tempora nesciunt animi, qui consectetur et
        aliquid beatae quia id blanditiis natus doloribus soluta sed aut eaque
        quasi iure molestiae excepturi quos assumenda minus perferendis.
        Asperiores inventore, id vel est tenetur quas atque nulla recusandae
        temporibus ipsum voluptatem debitis. Pariatur nostrum fuga voluptatem
        repudiandae, mollitia harum odio cum expedita minus, rerum error magnam.
        Voluptatum eius, aspernatur officiis provident deserunt repellendus
        molestias vel distinctio, quas fuga mollitia iste cumque nesciunt
        maiores dolore nostrum est eveniet doloremque odio! Eius ducimus quidem
        est omnis voluptatibus, dolores rem fugit possimus quia non dicta
        doloremque recusandae neque tempora iste expedita corporis ipsa unde
        officia obcaecati commodi veritatis? Ullam officia, dignissimos
        quisquam, necessitatibus, officiis excepturi ratione odit dolor earum
        vero eum veniam! Nesciunt excepturi, blanditiis consequatur quam
        dignissimos officiis architecto laborum aliquid. Dignissimos aut tempore
        beatae, nulla, sed recusandae libero repellendus culpa nostrum possimus
        pariatur? Accusantium illum incidunt, praesentium laborum blanditiis
        explicabo consequatur alias iusto odio cumque minus rerum laboriosam quo
        suscipit similique dolores natus quibusdam voluptatem, voluptate animi
        possimus temporibus? Reprehenderit nulla consequuntur deleniti tenetur
        unde? Modi quia rerum hic illo dignissimos, ad sunt, impedit quaerat
        possimus sint suscipit doloribus. Id in commodi, laboriosam nesciunt
        velit, alias repellat accusamus impedit amet inventore aliquam iure
        laborum quibusdam corrupti error sunt consequuntur praesentium maxime
        suscipit autem! Omnis temporibus, numquam aliquam asperiores facere
        natus, suscipit facilis adipisci porro aperiam saepe reiciendis. Minima
        delectus saepe asperiores. Aspernatur, deserunt tenetur inventore
        aliquid minima error. Quos eum sed quasi, excepturi quidem distinctio!
        Sunt laudantium et nihil vel, quasi optio iste ab inventore iure rerum
        obcaecati beatae aliquid! Vero soluta accusantium optio, quos iste
        itaque. Reprehenderit dicta unde velit quibusdam hic! Voluptatem tempora
        eaque voluptatibus illum labore nesciunt sapiente quam numquam, nobis
        odio! Corporis harum quo eligendi, minus minima magnam, assumenda
        deserunt facere cupiditate aut amet vitae repellendus, in veritatis
        quaerat. Commodi odio voluptatum adipisci. Sequi, odio libero ratione
        quia, perferendis voluptatibus illum quisquam quidem, iusto deserunt
        cumque excepturi!
      </div>
      {/* <MultipleInputs></MultipleInputs> */}
      {/* <RefBasics></RefBasics> */}
    </div>
  );
}

export default App;
