import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  cards = [
    {proimg: '../assets/images/1.jpg',title:'What is Lorem Ipsum?',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.'},
    {proimg: '../assets/images/2.jpg',title:'Why do we use it?', text:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'},
    {proimg: '../assets/images/3.png',title:'Where does it come from?', text:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'},
    {proimg: '../assets/images/4.jpg',title:'Where can I get some?', text:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. If you are going to use a passage of Lorem Ipsum.'},
    {proimg: '../assets/images/5.jpg',title:'Lorem ipsum dolor sit amet', text:'Quo unde doloribus aut placeat odit et veritatis officia rem dignissimos distinctio sit dicta illum. Qui suscipit quia a corporis optio ut deleniti distinctio ut pariatur vitae! Ut velit iste non doloremque voluptatem aut corrupti nulla qui possimus iste id optio tenetur, you need to be sure there isn t anything embarrassing.'},
    {proimg: '../assets/images/6.jpg',title:'Eum dolorem aperiam qui officiis ', text:'Voluptas et necessitatibus nobis et consequuntur provident. Eum magnam tenetur in beatae labore ut ullam exercitationem. Qui natus quos ut voluptate debitis sit iusto internos in distinctio odit et sint quia.Est adipisci esse sit doloremque culpa in voluptas deserunt? Eum repellat ducimus id nisi internos.'},
  ]
  

}
