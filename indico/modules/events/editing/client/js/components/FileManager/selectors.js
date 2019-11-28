// This file is part of Indico.
// Copyright (C) 2002 - 2019 CERN
//
// Indico is free software; you can redistribute it and/or
// modify it under the terms of the MIT License; see the
// LICENSE file for more details.

import _ from 'lodash';

export const getFiles = state => {
  return _.fromPairs(
    state.fileTypes
      .map(({id, files}) => [
        id,
        files.filter(file => file.state !== 'deleted').map(file => file.uuid),
      ])
      .filter(([, files]) => files.length !== 0)
  );
};
