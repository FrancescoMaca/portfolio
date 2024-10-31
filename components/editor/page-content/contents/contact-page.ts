import { PageContent } from "../content-handler";

export const contactPage: PageContent = {
  content: `
// Contact me here while this form is getting created

function createContactForm() {
  const form = document.createElement('form');
  form.id = 'contactForm';

  // Insert your name here
  const name = document.createElement('input');
  name.type = 'text';
  name.id = 'name';
  name.required = true;
  form.appendChild(name);

  // Insert your email here
  const email = document.createElement('input');
  email.type = 'email';
  email.id = 'email';
  email.required = true;
  form.appendChild(email);

  // Write your beautiful message below :)
  const message = document.createElement('textarea');
  message.id = 'message';
  message.rows = 5;
  message.required = true;
  form.appendChild(message);

  //
  // Click here to send your message
  //

  document.createButton('[[ACTION:Send Message,sendMessage]]')
  //                     ^^^^^^^^^^^^

  // Append the form to the container
  document.getElementById('formContainer').appendChild(form);
}

// Call the function to create the form
createContactForm();










const sunset =
\`
            ^^                   @@@@@@@@@
       ^^       ^^            @@@@@@@@@@@@@@      ^^
                            @@@@@@@@@@@@@@@@@@              ^^
                           @@@@@@@@@@@@@@@@@@@@
 ~~~~ ~~ ~~~~~ ~~~~~~~~ ~~ &&&&&&&&&&&&&&&&&&&& ~~~~~~~ ~~~~~~~~~~~ ~~~~~~~~ ~~~ ~~  ~  ~ 
 ~         ~~   ~  ~       ~~~~~~~~~~~~~~~~~~~~ ~       ~~     ~~ ~      ~     ~
   ~      ~~      ~~ ~~ ~~  ~~~~~~~~~~~~~ ~~~~  ~     ~~~    ~ ~~~  ~ ~~   ~
   ~  ~~     ~         ~      ~~~~~~  ~~ ~~~       ~~ ~ ~~  ~~ ~                  ~
 ~  ~       ~ ~      ~          ~~~ ~~~~~~  ~      ~~  ~             ~~    ~
       ~             ~        ~    ~~~      ~~   ~             ~
\`; // I'm not that good, this is from [[URL:[This pretty website],https://www.asciiart.eu/nature/sunset]]
`
};