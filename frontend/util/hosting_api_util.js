export const fetchHostings = () => (
  $.ajax({
    method: 'GET',
    url: 'api/hostings',
  })
);

export const fetchHosting = id => (
  $.ajax({
    method: 'GET',
    url: `api/hostings/${id}`,
  })
);

export const createHosting = hosting => (
  $.ajax({
    method: 'POST',
    url: 'api/hostings',
    data: { hosting },
  })
);
