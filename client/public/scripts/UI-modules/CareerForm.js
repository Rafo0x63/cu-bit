class JobForm extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <form class="open-jobs__form" name="">
        <div class="open-jobs__form">
        <div class="--top">
          <input type="text" name="name" placeholder="First name *" required/>
          <input type="text" name="surname" placeholder="Last name *" required/>
          <input type="text" name="mail" placeholder="Email *" required/>
          <input type="text" name="phone" placeholder="Phone *" required/>
        </div>
        <div class="--bottom">
          <label class="cv --file">

            <svg width="20" height="20" viewBox="0 0 39 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.0607 0.93934C20.4749 0.353553 19.5251 0.353553 18.9393 0.93934L9.3934 10.4853C8.80761 11.0711 8.80761 12.0208 9.3934 12.6066C9.97918 13.1924 10.9289 13.1924 11.5147 12.6066L20 4.12132L28.4853 12.6066C29.0711 13.1924 30.0208 13.1924 30.6066 12.6066C31.1924 12.0208 31.1924 11.0711 30.6066 10.4853L21.0607 0.93934ZM21.5 24L21.5 2H18.5L18.5 24H21.5Z" fill="#5CBBC8" />
              <path d="M1 22C1 22 5.94867 32 20 32C33.5 32 37.5 22 37.5 22" stroke="#5CBBC8" stroke-width="2" stroke-linecap="round" />
            </svg>
            <p class="cv-name">Resume/CV</p>
            <input type="file" accept="application/pdf,.doc, .docx,.csv, application/msword" name="CV" />
          </label>


          <label class="cover-letter --file">

            <svg width="20" height="20" viewBox="0 0 39 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.0607 0.93934C20.4749 0.353553 19.5251 0.353553 18.9393 0.93934L9.3934 10.4853C8.80761 11.0711 8.80761 12.0208 9.3934 12.6066C9.97918 13.1924 10.9289 13.1924 11.5147 12.6066L20 4.12132L28.4853 12.6066C29.0711 13.1924 30.0208 13.1924 30.6066 12.6066C31.1924 12.0208 31.1924 11.0711 30.6066 10.4853L21.0607 0.93934ZM21.5 24L21.5 2H18.5L18.5 24H21.5Z" fill="#5CBBC8" />
              <path d="M1 22C1 22 5.94867 32 20 32C33.5 32 37.5 22 37.5 22" stroke="#5CBBC8" stroke-width="2" stroke-linecap="round" />
            </svg>
            <p class="cover-l-name">Cover Letter</p>
            <input type="file" accept="application/pdf,.doc, .docx,.csv" name="CoverLetter">
          </label>

          <input type="text" name="aboutMe" placeholder="Something about yourself" />
          <input type="text" name="social" placeholder="Github, Linkedin, Dribble, Twitter..." />
          <input type="text" name="from" placeholder="How did you hear about us?" />
        </div>
        <input class="form__submit-btn hide" type="submit" placeholder="Submit"/>
        </div>
      </form>`
    }
}
customElements.define("job-form", JobForm)
