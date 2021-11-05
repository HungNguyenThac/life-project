const menu = document.querySelector(".header__menu");

menu.addEventListener("click", handleClickToggleMenu);

function handleClickToggleMenu() {
  const toggleMenu = document.querySelector(".toggle__menuList");
  const menuCircle = document.querySelector(".page1__menu-circle");
  const backgroundCircle = document.querySelector(
    ".container__background-circle"
  );
  const headerMenu = document.querySelector(".header__menu");

  toggleMenu.classList.toggle("active");
  headerMenu.classList.toggle("active");
  menuCircle.classList.toggle("active");
  backgroundCircle.classList.toggle("active");
}

document
  .querySelector(".footer__logo")
  .addEventListener("click", handleClickLogoToTop);
function handleClickLogoToTop() {
  document.documentElement.scrollTop = 0;
}

<div style={{ 
                // display: 'flex', 
                display: "none",
                flexDirection: 'column', 
                backgroundColor: '#29B6F6', 
                padding: '20px', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                height: '158px' }}>
                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'flex-start', 
                    alignItems: 'center', 
                }}>
                    <Typography variant={"h5"} style={{ marginBottom: '10px', color: '#ffffff', marginRight: '5px' }}>Định danh video call</Typography>    
                    <Button
                        aria-describedby={id}
                        variant="contained"
                        onClick={handleClick}
                        className={classes.statusBtn}>
                        <span className={`${classes.status} ${classes[statusClass[status]]}`}/>
                        {allStatuses[status]}
                        <ExpandMore/>
                    </Button>
                </div>
                <Button
                    variant="contained"
                    onClick={toCallDashboard}
                    className={classes.callManageBtn}>
                    Quản lý cuộc gọi
                </Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center'
                    }}>
                    <div className={classes.listStatuses}>
                        <List component="nav">
                            {statusList.map(s => (
                                <ListItem disabled={s.disabled} key={s.value} button onClick={() => update(s.value)}>
                                    <span className={`${classes.status} ${classes[statusClass[s.value]]}`}/>
                                    <ListItemText primary={s.label}/>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Popover>
            </div>
        )
