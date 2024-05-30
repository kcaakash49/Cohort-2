import React from "react";

const CardWrapperChildren = () => {
  return (
    <div>
      {/* any thing inside CardWrapper component tag is its children */}
      <CardWrapper>Hey There</CardWrapper>
      <CardWrapper><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam recusandae ducimus sunt adipisci eos assumenda expedita. Expedita neque voluptatibus beatae, tempore placeat sequi ratione officia exercitationem repellat numquam itaque, maiores alias repellendus ad, commodi similique velit vel. Ratione accusamus cum alias sequi, maxime aspernatur! Architecto impedit perferendis eveniet sapiente esse ipsa aperiam. Odit at optio natus saepe molestias temporibus iure dolorem sit, ullam similique nulla aut doloremque nostrum maxime dolores commodi necessitatibus velit ipsam dolor culpa accusamus veniam cupiditate ut ad? Ex laborum ad enim odit voluptatibus explicabo assumenda fuga quisquam eveniet error? Quasi deserunt corporis excepturi cupiditate pariatur cumque animi nihil nulla tempore? Ut ratione vero adipisci voluptatibus. Perferendis nam quis cum voluptatem quia, et reiciendis amet quasi sunt harum animi, alias est, magnam nostrum ullam ipsam vel officiis modi. Quam rem voluptatum unde sequi vero in id magni culpa illum asperiores numquam dolores quaerat reiciendis quos expedita saepe at qui rerum eum voluptates excepturi aut, dolore tempore. Ad expedita velit nihil ab quae ipsa. Quaerat fugiat corporis voluptatum earum quas est minus, molestias inventore ullam, laboriosam autem dolores sapiente voluptatibus nulla at rerum? Dolorum eum sed soluta eveniet a ut dignissimos labore veniam, accusantium, velit optio quasi amet?</p></CardWrapper>
      <CardWrapper><TextComponent/></CardWrapper>
    </div>
  );
};

function CardWrapper({ children }) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: 10,
        margin: 10,
        border: "2px solid black",
      }}
    >
      {children}
    </div>
  );
}

function TextComponent(){
    return <div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, consectetur minus laborum ullam iure qui dolores possimus impedit natus dolore praesentium iusto, molestiae culpa! Ratione consequuntur sed sint est debitis alias quaerat a, quia unde veritatis distinctio culpa harum cum mollitia ex saepe totam amet vitae voluptates rem quasi eos dolores? Sapiente unde quasi laboriosam earum accusantium illum consectetur libero sed in quos dolorem quibusdam nisi eius adipisci labore, ad, minus facilis. Sit eos inventore a doloremque, ipsam vel dicta sapiente voluptate optio fugit numquam eaque commodi culpa delectus velit quod magnam laborum omnis deleniti voluptas illum natus iure molestias quia. Repellendus officiis nihil blanditiis, quae commodi reiciendis ab ea, facere obcaecati iusto repellat? Sunt voluptatem veritatis assumenda quaerat ratione nesciunt amet cupiditate voluptas eligendi quidem laboriosam molestias consequuntur perferendis optio cumque sequi, suscipit voluptatum quas a numquam recusandae? Unde adipisci non enim aut excepturi asperiores nam consequatur reprehenderit illum temporibus neque exercitationem totam dignissimos sunt blanditiis optio, est placeat delectus. Illum placeat praesentium dolorum officia laudantium cupiditate dolorem fugiat animi atque minus! Error recusandae corporis eaque amet repudiandae deleniti nobis aperiam reiciendis nam ipsum fugit, veniam, debitis nemo! Reprehenderit placeat provident commodi. Suscipit fugiat molestias, blanditiis sapiente quas maxime quae ad labore ipsa hic optio provident dicta delectus, nesciunt commodi cupiditate a, doloribus distinctio consequatur natus qui quibusdam corporis deserunt quod. Quos doloribus ab eligendi possimus. Magnam impedit corrupti eum tempora quis! Hic quae consequatur ullam repellat, placeat incidunt tenetur sed vel, sapiente non dignissimos adipisci corporis fuga minima illo iste aliquam reprehenderit. Ratione nam nostrum consequatur ipsam, consectetur at, deserunt, accusamus veritatis praesentium cumque voluptas doloremque magni vitae dolorum expedita beatae reiciendis repellat culpa cupiditate laudantium! Asperiores eligendi natus, et tempora ipsum eius optio laboriosam explicabo quibusdam, vero voluptatum, rem excepturi reprehenderit harum. Maxime, assumenda quod laudantium ad vitae officiis nobis, eius nam placeat, tempore praesentium esse nulla natus vel aspernatur eveniet et deserunt tenetur inventore voluptatum fugiat sed? Eveniet velit delectus quia? Temporibus impedit eaque illo, nam non quas unde doloremque nihil fugiat esse recusandae dignissimos consectetur nostrum obcaecati voluptatibus quia ab ullam. Explicabo optio dolorem rerum blanditiis doloremque eos suscipit, odio, voluptate illo nisi, perspiciatis iusto voluptatum? Recusandae pariatur, cum aspernatur voluptas esse culpa debitis numquam eos quis quam doloremque minima inventore natus ratione beatae quasi qui aut maiores perferendis veniam repudiandae? Quibusdam quam, soluta recusandae deserunt deleniti molestias iusto fugiat consectetur officiis! Illum, ipsam possimus?</p>
    </div>
}
export default CardWrapperChildren;



