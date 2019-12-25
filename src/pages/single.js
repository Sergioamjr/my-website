/** @jsx jsx */
import { jsx } from "@emotion/core";
import Template from "../components/Template";

import Tags from "../components/Tags";
import { Container, secondTitle, largeMgBottom, text } from "../design";

const Single = () => (
  <Template>
    <Container small>
      <h2 css={secondTitle}>Introdução React Hooks</h2>
      <div css={largeMgBottom}>
        <Tags name="React" />
      </div>
      <p css={text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit
        nec ipsum ac tristique. Nunc erat orci, scelerisque eget nisi quis,
        efficitur consequat magna. Maecenas pulvinar felis id purus congue
        maximus. Sed scelerisque pulvinar massa non dictum. Donec mauris neque,
        luctus sed sodales ut, rutrum ac dui. Vestibulum nisl ante, pellentesque
        et nisl a, egestas pharetra neque. Vivamus quis tortor laoreet, finibus
        nulla et, rutrum magna. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Quisque varius venenatis
        sodales. Aliquam et bibendum nisl, et ultricies tortor. Nunc vulputate
        sapien lorem, nec consequat metus hendrerit nec. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam
        sollicitudin, ipsum at lacinia varius, dui massa pharetra eros, ac
        sagittis sapien lacus nec lectus. Quisque facilisis felis vitae velit
        varius semper. Phasellus est est, facilisis vitae ante semper, porttitor
        blandit justo. Ut dapibus a mi vel porta.
      </p>
      <p css={text}>
        Fusce ac accumsan lectus. Mauris sit amet massa ligula. Suspendisse
        congue mi libero, varius eleifend enim dapibus vitae. Pellentesque
        feugiat felis quis posuere facilisis. Proin sit amet gravida arcu, id
        tristique metus. Nunc sapien velit, gravida eget ullamcorper quis,
        molestie vitae justo. Fusce gravida, erat quis suscipit bibendum, eros
        libero egestas enim, in semper dui lacus quis risus. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Aliquam id molestie ex. Donec
        vitae convallis magna. Donec et dui a turpis pharetra aliquam blandit
        eget sem.
      </p>
      <p css={text}>
        Nam laoreet, urna non ornare interdum, elit sapien tristique nunc, ut
        egestas dui purus eu augue. Ut iaculis viverra diam, vel accumsan lacus
        dapibus ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nunc id tortor aliquet, facilisis orci eget, finibus felis. Sed sed
        aliquam lacus, vitae vehicula turpis. Cras malesuada facilisis ante eu
        feugiat. In consectetur molestie arcu ut condimentum. Phasellus interdum
        dolor sed arcu condimentum elementum eu vel ex. Duis dapibus nec magna
        eget rhoncus. Proin vel porta sapien, ut sodales elit. Morbi facilisis
        diam in augue pulvinar interdum. Vestibulum vel porta lacus.
      </p>
      <p css={text}>
        Maecenas finibus efficitur egestas. Mauris gravida luctus mauris, ac
        placerat augue imperdiet tincidunt. Fusce egestas eros in tempor
        dignissim. Fusce egestas maximus arcu sit amet porta. Praesent at
        suscipit turpis. Etiam dolor ligula, mattis eu luctus non, imperdiet
        tempus lorem. Curabitur at justo in quam egestas vestibulum ut eget
        nunc. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Nulla rhoncus purus in ultricies
        viverra. Aenean fermentum risus massa, quis molestie dolor congue
        dapibus. Nam quis neque posuere, convallis elit id, bibendum quam.
      </p>
      <p css={text}>
        Nam ultrices at enim id faucibus. Ut rhoncus justo id leo mattis
        sollicitudin. Sed ac nibh id libero finibus bibendum a id dui. Aenean
        condimentum erat sit amet feugiat iaculis. Sed lacinia sem id diam
        convallis rhoncus quis id leo. Aliquam et nisi nulla. Vestibulum vel
        ipsum eu metus faucibus bibendum vitae sed purus. Nullam vel lacus id
        nulla lacinia condimentum sit amet ut lectus. Integer accumsan dolor
        est, vel tempor nisl fermentum ultrices. Maecenas ultricies eleifend
        molestie. Suspendisse dui dolor, lobortis eu dolor vel, vehicula
        pellentesque tellus. Integer vitae magna velit.
      </p>
    </Container>
  </Template>
);

export default Single;
