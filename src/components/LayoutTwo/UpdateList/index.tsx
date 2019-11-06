import React from 'react';
import { Update } from './Update';
import { LoadMore } from './LoadMore';

export function UpdateList() {
  return (
    <>
      <Update
        recent={true}
        ios={true}
        title="Flow for iOS 5.25"
        description="Performance improvement and bug fixes."
        date="March 20, 2019"
        added={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Praesent id molestie leo.",
          "Donec ut feugiat justo. Morbi maximus placerat egestas."
        ]}
        fixed={[
          "Integer porta nulla nisl, vel posuere orci consequat at."
        ]}
        improved={[
          "Integer porta nulla nisl, vel posuere orci consequat at.",
          "Donec ut feugiat justo. Morbi maximus placerat egestas."
        ]}
      ></Update>
      <Update
        title="Flow 1.8"
        description="Performance improvement and bug fixes."
        date="March 10, 2019"
        added={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Quisque imperdiet pharetra ipsum at luctus."
        ]}
        fixed={[
          "Integer porta nulla nisl, vel posuere orci consequat at."
        ]}
        improved={[
          "Integer porta nulla nisl, vel posuere orci consequat at.",
          "Quisque imperdiet pharetra ipsum at luctus."
        ]}
      ></Update>
      <Update
        title="Flow 1.7"
        description="The release includes improvements and bug fixes."
        date="January 7, 2019"
        added={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Donec ut feugiat justo. Morbi maximus placerat egestas.",
          "Quisque imperdiet pharetra ipsum at luctus.",
          "Donec ut feugiat justo. Morbi maximus placerat egestas."
        ]}
        fixed={[
          "Integer porta nulla nisl, vel posuere orci consequat at.",
          "Suspendisse neque lorem, viverra id nulla vitae.",
          "Integer porta nulla nisl, vel posuere orci consequat at.",
          "Quisque imperdiet pharetra ipsum at luctus."
        ]}
        improved={[
          "Integer porta nulla nisl, vel posuere orci consequat at.",
          "Suspendisse neque lorem, viverra id nulla vitae.",
          "Quisque mattis lobortis sem, at dignissim neque egestas non."
        ]}
      ></Update>
      <Update
        title="Flow 1.6"
        description="Performance improvement and bug fixes."
        date="December 15, 2018"
        added={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Quisque imperdiet pharetra ipsum at luctus."
        ]}
        fixed={[
          "Integer porta nulla nisl, vel posuere orci consequat at."
        ]}
        improved={[
          "Integer porta nulla nisl, vel posuere orci consequat at.",
          "Quisque imperdiet pharetra ipsum at luctus."
        ]}
      ></Update>
      <LoadMore></LoadMore>
    </>
  );
}