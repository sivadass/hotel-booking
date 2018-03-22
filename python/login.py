from selenium import webdriver
driver = webdriver.Firefox()
driver.get('http://sivadass.in/')
aboutButton = driver.find_elment_by_link_text("Know more about me!")
aboutButton.click()