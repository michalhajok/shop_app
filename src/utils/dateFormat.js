const dateFormat = (e) => {
    const date = new Date(e);
    const yyyy = date.getFullYear();
    const mm = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const dd = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

    const format = `${dd}/${mm}/${yyyy}`;

    return format;
};

export default dateFormat;
